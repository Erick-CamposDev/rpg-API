import { characterData } from "../data/character-data";
import { Character } from "../schemas/characterSchema";
import { potions, weapons } from "../schemas/itemSchema";
import { getCharacterId } from "./characters-repository";

export const getCharacterInventory = async (id: string) => {
  const characterFound = characterData.find(
    (character: Character) => parseInt(id) === character.id,
  );

  if (!characterFound) {
    return false;
  }

  return characterFound.inventory;
};

export const addItemInInventory = async (
  id: string,
  body: weapons | potions,
) => {
  const characterFound = await getCharacterId(id);

  if (!characterFound) {
    return false;
  }

  characterFound.currentWeight += body.weight;
  characterFound.inventory.items.push(body);
};
