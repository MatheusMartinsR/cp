import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export const Dashboard: React.FC = () => {
  const [character, setCharacter] = useState<string>("");
  const [characterList, setCharacterList] = useState<[]>([]);

  const totalCharacters = characterList.length

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Buscar Personagem</Text>
        <TextInput
          value={character}
          onChangeText={setCharacter}
          placeholder="Ex: iron man"
          style={styles.input}
        />
      </View>
      <View 
      style={styles.characterSection}
      >
        <Text style={styles.text}>{totalCharacters} de {totalCharacters} Personagens Econtrados</Text>
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
    backgroundColor: "black",
    paddingTop: 20,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  characterSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 50,
  },
  input: {
    width: 280,
    height: 40,
    padding: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "pink",
    backgroundColor: "white",
  },
  characterName: {
    width: 280,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    color: "white",
    width: "100%",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
    width: "100%",
    textAlign: "center",
  },
  divider: {
    width: "100%",
    height: 3,
    backgroundColor: "pink",
  },
});
