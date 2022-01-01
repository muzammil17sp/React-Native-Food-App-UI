import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import SortIcon from "react-native-vector-icons/MaterialIcons";
import Product from "../components/Product";
import Category from "../components/Category";
import { useStateValue } from "../context/StateProvider";
import { FOOD_SEARCH } from "../context/reducer";
import { white } from "../data/colors";

const Home = ({ navigation }) => {
  const [{ foods, categories}, dispatch] = useStateValue();
  const [selectedIndex, setSelectedIndex] = useState("");
console.log("foods" , foods)
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.header}
    >
      <Text
        style={{
          fontFamily: "Semibold",
          fontSize: 20,
          marginVertical: 15,
        }}
      >
        Foods
      </Text>
      <View style={styles.inputContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="search" size={30} color={"grey"} />
          <TextInput
            onChangeText={(e) => dispatch({ type: FOOD_SEARCH, payload: e })}
            placeholder="What are you looking for?"
            style={styles.input}
            numberOfLines={2}
          />
        </View>
        <SortIcon name="sort" size={30} color={"grey"} />
      </View>
      <Text style={{ fontFamily: "Poppins", fontSize: 20, marginVertical: 15 }}>
        Categories
      </Text>
      <View style={{ flexDirection: "row", paddingBottom: 6 }}>
        {categories?.map((category, index) => (
          <Category
            key={category.name}
            category={category}
            index={index}
            setSelectedIndex={setSelectedIndex}
            selectedIndex={selectedIndex}
          />
        ))}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        numColumns={2}
        renderItem={({ item }) => (
          <Product key={item.name} item={item} navigation={navigation} />
        )}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    backgroundColor:white,
    padding: 20,
    flex: 1,
  },

  input: {
    width: "82%",
    color: "grey",
    fontSize: 16,
    marginHorizontal: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    height: 60,
    backgroundColor: "#eceff6",
    borderRadius: 8,
    marginVertical: 10,
    elevation: 1,
  },
});
