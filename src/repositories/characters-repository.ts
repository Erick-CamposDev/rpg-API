import { characterData } from "../data/character-data";
import { Character } from "../schemas/characterSchema";
import { UpdatedCharacter } from "../schemas/updateCharacterSchemas";

export const getCharacters = async () => {
  return characterData;
};

export const getCharacterId = async (id: string) => {
  const foundCharacter = characterData.find(
    (character: Character) => parseInt(id) === character.id,
  );
  return foundCharacter;
};

export const deleteCharacterId = async (id: string) => {
  const index = characterData.findIndex(
    (character: Character) => parseInt(id) === character.id,
  );

  if (index === -1) {
    return false;
  }

  characterData.splice(index, 1);
  return true;
};

export const addNewCharacter = async (body: Character) => {
  characterData.push(body);
};

export const updateCharacter = async <T>(id: string, body: T) => {
  const foundCharacter = characterData.find(
    (character: Character) => parseInt(id) === character.id,
  );

  if (!foundCharacter) {
    return false;
  }

  Object.assign(foundCharacter, body);
  return true;
};
