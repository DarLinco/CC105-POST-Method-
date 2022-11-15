import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const BottomTab = createMaterialBottomTabNavigator();

import MainPage from "./HomeChildrenScreens/MainPage";
import Library from "./HomeChildrenScreens/Library";
import Favorites from "./HomeChildrenScreens/Favorites";
import About from "./About";

function Home({}) {
  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      inactiveColor="black"
      activeColor="#ffff"
      labelStyle={{ fontsize: 12 }}
      barStyle={{ backgroundColor: "orangered" }}
    >
      <BottomTab.Screen
        name="Main"
        component={MainPage}
        options={{
          tabBarLabel: "Main Page",
          tabBarIcon: () => <Icon name="lightbulb" color={"#ffff"} size={26} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorite",
          tabBarBadge: true,
          tabBarIcon: () => <Icon name="lightbulb" color={"#ffff"} size={26} />,
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: "Library",
          tabBarBadge: 100,
          tabBarIcon: () => <Icon name="library" color={"#f5fffa"} size={26} />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "Me",
          tabBarIcon: () => <Icon name="account" color={"#f5fffa"} size={26} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Home;
