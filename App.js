import React from "react";
import Home from "./Screens/Home";
import "react-native-gesture-handler";
import Premium from "./Screens/Premium";
import Profile from "./Screens/Profile";
import Discover from "./Screens/Discover";
import { StyleSheet, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Discover" component={Discover} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Premium" component={Premium} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});