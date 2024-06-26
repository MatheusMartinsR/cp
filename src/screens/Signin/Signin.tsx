import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { AuthService } from "../../service/auth";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack.routes";

export const Signin: React.FC = () => {
  const navigation = useNavigation<StackTypes>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignin = () => {
    AuthService.login({
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res);
        ToastAndroid.show("Login realizado com sucesso", ToastAndroid.SHORT);
        navigation.navigate("Dashboard")
      })
      .catch((err) => {
        console.error(err);
        ToastAndroid.show("Erro ao realizar o login!", ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>E-mail:</Text>
        <TextInput value={email} onChangeText={setEmail} style={styles.input} />
        <Text>Senha:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignin}>
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
