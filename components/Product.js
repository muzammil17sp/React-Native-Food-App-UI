import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import PlusIcon from "react-native-vector-icons/AntDesign"
import { white } from '../data/colors'

const Product = ({ item, navigation }) => {
    return (
        <Pressable onPress={() => navigation.navigate("SingleProduct", { product: item })}>

            <View style={styles.productTopPart}>
                <View style={{ padding: 10 }} >
                    <Image source={item.image} style={{ height: 170, width: 150, resizeMode: "contain" }} />
                </View>
                <View style={styles.productBottomPart}>
                    <Text style={{ fontFamily: "Poppins", color: "grey", fontSize: 14 }}>{item.quantity}</Text>
                    <Text style={{ fontFamily: "Poppins", fontSize: 20 }} >{item.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontFamily: "Poppins", fontSize: 14, }}>Rs {item.price}</Text>

                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default Product

const styles = StyleSheet.create({
    productTopPart: {
        backgroundColor: "#eceff6", margin: 10, justifyContent: "space-between", borderRadius: 8, elevation: 5,  
    },
    productBottomPart: {
        margin: 5, padding: 4, backgroundColor: white, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    }
})
