import "react-native-gesture-handler";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import About from "./screens/About";

function App() {
  const Drawer = createDrawerNavigator();
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="Log-in" component={Login} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Signup" component={Signup} />
        <stack.Screen name="About" component={About} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
