import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import ProductIcons from "react-native-vector-icons/Feather";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useStateValue } from "../context/StateProvider";
import { ADD_TO_BASKET } from "../context/reducer";
import { orange, white } from "../data/colors";

const SingleProduct = ({ route, navigation }) => {
  const [{ }, dispatch] = useStateValue();

  const item = route.params.product;
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{
        backgroundColor: white,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 25,
        }}
      >
        <Pressable onPress={() => navigation.navigate("Home")}>
          <View style={styles.headerBtn}>
            <Icon name="ios-arrow-back-outline" color={"#000"} size={26} />
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("CartScreen")}>
          <View style={styles.headerBtn}>
            <Icon name="cart-outline" size={26} color={"#000"} />
          </View>
        </Pressable>
      </View>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={item.image}
              style={{ height: 250, width: "90%", resizeMode: "contain" }}
            />
          </View>

          <Text style={{ fontFamily: "Poppins", color: "grey", fontSize: 14 }}>
            {item.quantity}
          </Text>
          <Text
            style={{
              fontFamily: "Semibold",
              fontSize: 20,
              marginVertical: 10,
            }}
          >
            {item.name}
          </Text>

          <Text
            style={{
              fontFamily: "Semibold",
              fontSize: 16,
              color: orange,
            }}
          >
            Rs {item.price}
          </Text>
          <Text
            style={{ fontFamily: "Poppins", fontSize: 14, marginVertical: 20 }}
          >
            {item.description}
          </Text>
        </View>
        <TouchableOpacity onPress={() => dispatch({ type: ADD_TO_BASKET, payload: item })}>
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
              Add to Cart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  headerBtn: {
    backgroundColor: "#eceff6",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 5,
  },
  btn: {
    backgroundColor: orange,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 8,
    height: 60,
  }
});
