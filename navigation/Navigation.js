import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SingleProduct from "../screens/SingleProduct";
import Ionicons from "react-native-vector-icons/Ionicons";
import CartScreen from "../screens/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useStateValue } from "../context/StateProvider"
import {orange, white} from "../data/colors"
const tabOptions ={
  headerShown: false,
  tabBarActiveBackgroundColor: orange,
  tabBarActiveTintColor: white,
  tabBarInactiveTintColor: orange,
  tabBarLabelStyle: {
    fontSize: 14,
  },
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="SingleProduct" component={SingleProduct} />
      <SettingsStack.Screen name="CartScreen" component={CartScreen} />

    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function CartScreenStack() {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown:false}}>
      <SettingsStack.Screen name="CartScreen" component={CartScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Navigation() {
  const [{basket},dispatch] = useStateValue()
  
  return (
    <Tab.Navigator screenOptions={({ route }) => ({})}>
      <Tab.Screen
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="home" size={24} color={tabInfo.focused? white :orange} />;
          },
          ...tabOptions,
        }}
        name="Home"
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{

          tabBarIcon: (tabInfo) => {
            return <Ionicons name="cart" size={24} color={tabInfo.focused? white :orange} />;
          },
        tabBarBadge:basket.length,
        tabBarBadgeStyle:{
marginLeft:10,
color:white
        },
      
        

          ...tabOptions,

        }}
        name="Cart"
        component={CartScreenStack}
      />
    </Tab.Navigator>
  );
}

export default Navigation;