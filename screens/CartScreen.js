import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/Ionicons";
import Dustbin from "react-native-vector-icons/AntDesign";
import CartItem from "../components/CartItem";
import { useStateValue } from "../context/StateProvider";
import { REMOVE_FROM_CART } from "../context/reducer";
import { orange, white } from "../data/colors";

const CartScreen = ({ navigation }) => {
  const [{ basket }, dispatch] = useStateValue();
  const item = basket.reduce((a, b) => a + b.qty, 0);
  const total = basket.reduce((a, b) => a + b.price * b.qty, 0);
  const onItemOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  return (
    <View
      style={{
        backgroundColor: white,
        flex: 1,
        paddingVertical: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Pressable onPress={() => navigation.navigate("Home")}>
          <View style={styles.headerBtn}>
            <Icon name="ios-arrow-back-outline" color={"#000"} size={26} />
          </View>
        </Pressable>
        <Text
          style={{
            fontFamily: "Semibold",
            fontSize: 18,
            marginLeft: 100,
          }}
        >
          Cart Food
        </Text>
      </View>
      <SwipeListView
        data={basket}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item, index) => index}
        renderHiddenItem={(rowData, rowMap) => (
          <View style={styles.rowBack}>
            <TouchableOpacity
              onPress={() => {
                dispatch({ type: REMOVE_FROM_CART, payload: rowData.item });
              }}
              style={[styles.actionButton, styles.closeBtn]}
            >
              <Dustbin name="delete" color={orange} size={28} />
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onItemOpen}
      />
      <View
        style={{
          paddingHorizontal: 40,
          backgroundColor: white,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Poppins", fontSize: 20 }}>
            Total Items :
          </Text>
          <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>{item}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Poppins", fontSize: 20 }}>
            Total Price :
          </Text>
          <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>{total}</Text>
        </View>
        <TouchableOpacity>
          <View
            style={styles.btn}
          >
            <Text
              style={{
                fontFamily: "Semibold",
                fontSize: 16,
                color: white,
              }}
            >
              Confirm & Pay
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartScreen;
const styles = StyleSheet.create({
  headerBtn: {
    backgroundColor: "#eceff6",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 6,
    width: 50,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  list: {
    color: white,
  },
  btnText: {
    color: white,
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "lightcoral",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    justifyContent: "center",
    // height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: white,
    // flex: 1,
    height: 50,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  closeBtn: {
    right: 35,
  },
  deleteBtn: {
    backgroundColor: "red",
    right: 0,
  },
  btn: {
    backgroundColor: orange,
    alignItems: "center",
    justifyContent: "center",
    
    borderRadius: 8,
    height: 60,
  }
});
