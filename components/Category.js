import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import CategoryIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useStateValue } from "../context/StateProvider";
import { CATEGORY_FILTER } from "../context/reducer";
import { orange } from "../data/colors";
const Category = ({
  category,
  setSelectedIndex,
  index,
  selectedIndex,
}) => {
  const [{}, dispatch] = useStateValue();

  return (
    <Pressable
      key={index}
      onPress={() => {
        setSelectedIndex(index),
          dispatch({ type: CATEGORY_FILTER, payload: category.name });
      }}
    >
      <View style={{ marginRight: 30, alignItems: "center" }}>
        <View
          style={{
            padding: 13,
            backgroundColor: selectedIndex === index ? orange : "#eceff6",
            borderRadius: 8,
          }}
        >
          <CategoryIcon
            name={category.icon}
            size={33}
            color={selectedIndex === index ? "#eceff6" : "#000"}
          />
        </View>
        <Text style={{ fontFamily: "Poppins" }}>{category.name}</Text>
      </View>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({});
