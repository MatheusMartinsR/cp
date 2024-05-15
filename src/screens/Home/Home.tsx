import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { StackTypes } from "../../routes/stack.routes";

export const Home: React.FC = () => {
  const navigation = useNavigation<StackTypes>();

  const handleNavigateAbout = () => {
    navigation.navigate("About");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNavigateAbout}>
          <Text>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 280,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    borderRadius: 8,
  },
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
