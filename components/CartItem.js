import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import ProductIcons from "react-native-vector-icons/Feather";
import { ADJUST_QTY } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import { orange, white } from '../data/colors';

const CartItem = ({item}) => {
    const [Quantity, setQuantity] = useState(item.qty)
const [{},dispatch]=useStateValue()
useEffect(()=>{
    const name = item.name
dispatch({type : ADJUST_QTY,payload :{Quantity,name}})
},[Quantity])
    return (
        <View
        style={styles.cartitem}
      >
        <Image
          source={item.image}
          style={{ height: 100, width: 100, resizeMode: "contain" }}
        />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontFamily: "Poppins", fontSize: 17 }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: "Semibold",
              fontSize: 14,
              color: orange,
            }}
          >
            Rs: {item.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
        <Pressable disabled={Quantity==1} onPress={()=>setQuantity(Quantity-1)}>

          <View
            style={{
              backgroundColor: "#eceff6",
              borderRadius: 7,
              padding: 7,
            }}
          >
            <ProductIcons name="minus" size={26} />
          </View>
        </Pressable>

          <Text
            style={{
              fontFamily: "Semibold",
              fontSize: 14,
              marginHorizontal: 8,
            }}
          >
            {item.qty}
          </Text>
          <Pressable  disabled={Quantity==10} onPress={()=>setQuantity(Quantity+ 1)}>

          <View
            style={{
              backgroundColor: "#eceff6",
              borderRadius: 7,
              padding: 7,
            }}
          >
            <ProductIcons name="plus" color={orange} size={26} />
          </View>
          </Pressable>
        </View>
      </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
  cartitem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
    marginTop: 20,
    padding: 5,
    backgroundColor: white,
    marginHorizontal: 20,
    elevation: 3,
    marginBottom: 6,
  }
})
