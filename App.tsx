import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import StackComponent from "./src/routes/stack.routes";
import { StatusBar } from "expo-status-bar";

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <StackComponent />
    </GestureHandlerRootView>
  );
}

export default App;
