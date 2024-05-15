import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const About: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>@MatheusMartinsR</Text>
        <Text>@2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
