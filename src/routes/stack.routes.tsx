import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Home } from "../screens/Home/Home";


const Stack = createNativeStackNavigator();

export type StackNavigation = {
  Home: undefined;
  About: undefined;
  Sigin: undefined;
  Dashboard: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
