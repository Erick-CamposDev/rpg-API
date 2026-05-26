import { characterData } from "../data/character-data";
import { Character } from "../schemas/characterSchema";

export const getCharacterInventory = async (id: string) => {
  const characterFound = characterData.find(
    (character: Character) => parseInt(id) === character.id,
  );

  if (!characterFound) {
    return false;
  }

  return characterFound.inventory;
};
