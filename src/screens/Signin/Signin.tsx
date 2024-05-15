import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>E-mail:</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.input}
        />
        <Text>Senha:</Text>
        <TextInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
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
  input: {
    width: 280,
    height: 50,
    padding: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "pink",
  },
  button: {
    width: 100,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    borderRadius: 8,
  },
});
