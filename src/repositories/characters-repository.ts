import { characterData } from "../data/character-data";
import { Character } from "../schemas/characterSchema";

export const getCharacters = async () => {
  return characterData;
};

export const getCharacterId = async (id: string) => {
  const foundCharacter = characterData.find(
    (character: Character) => parseInt(id) === character.id,
  );
  return foundCharacter;
};
