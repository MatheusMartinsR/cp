import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { CharacterService } from "../../service/characters";
import { Character, CharacterResponseProps } from "../../service/interfaces/character";

export const Dashboard: React.FC = () => {
  const [character, setCharacter] = useState<string>("");
  const [characterList, setCharacterList] = useState<CharacterResponseProps | null>(null);
  const [loading, setLoading] = useState(false);

  const totalCharacters = characterList?.data.results.length;

  const handleGetCharacters = useCallback(() => {
    setLoading(true);
    CharacterService.getCharacters()
      .then((res) => {
        setCharacterList(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleGetCharacters();
  }, []);

  const renderCharacter = ({ item }: { item: Character }) => {
    return (
      <View style={styles.content}>
        <View style={styles.characterName}>
          <Text>{item.name}</Text>
        </View>
        <Image source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} width={280} height={400} />
        <View style={styles.characterName}>
          <Text>{item.comics.items[0].name}</Text>
        </View>
      </View>
    );
  };

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
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.characterSection}>
          <Text style={styles.text}>
            {totalCharacters} de {totalCharacters} Personagens Econtrados
          </Text>
          <FlatList
            data={characterList?.data?.results}
            renderItem={renderCharacter}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
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
