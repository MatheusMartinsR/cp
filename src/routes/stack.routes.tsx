import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Home } from "../screens/Home/Home";
import { About } from "../screens/About/About";
import { Signin } from "../screens/Signin/signin";

const Stack = createNativeStackNavigator();

export type StackNavigation = {
  Home: undefined;
  About: undefined;
  Signin: undefined;
  Dashboard: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="About"
          options={{
            title: "Marvel App - Sobre",
          }}
          component={About}
        />
        <Stack.Screen
          name="Signin"
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
          component={Signin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
