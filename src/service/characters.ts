import { apiMarvel } from "./apiMarvel";
import { CharacterResponseProps } from "./interfaces/character";

export const CharacterService = {
  getCharacters: async () => {
    const res = await apiMarvel.get<CharacterResponseProps>("v1/public/characters?apikey=66e236bb5348f998499a0500b9566e35dcbaf368");

    return res.data;
  },
};
