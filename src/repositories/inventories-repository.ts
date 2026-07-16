import { characterData } from "../data/character-data";
import { Character } from "../schemas/characterSchema";
import { armors, potions, weapons } from "../schemas/itemSchema";
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

export const equipArmorRepo = async (id: string, body: armors) => {
  const characterFound = await getCharacterId(id);

  if (!characterFound) {
    return false;
  }

  const characterArmorSlots = characterFound.inventory.armorSlots;

  if ("bonus" in body) {
    const bonusedDefense = body.defense + body.bonus * body.defense;
    characterFound.baseDefense += bonusedDefense;
  }

  characterFound.baseDefense += body.defense;
  characterFound.currentWeight += body.weight;
  characterArmorSlots.push(body);
};

export const deleteItemInCharacterInventory = async (
  id: string,
  slot: string,
) => {
  const characterFound = await getCharacterId(id);

  if (!characterFound) {
    return false;
  }

  const characterItems = characterFound.inventory.items;
  const slotIndex = Number(slot);
  const itemToRemove = characterItems[slotIndex - 1];

  if (!itemToRemove) {
    return false;
  }

  characterFound.currentWeight -= itemToRemove.weight;
  characterItems.splice(slotIndex, 1);

  return true;
};

export const unequipCharacterArmor = async (id: string, slot: string) => {
  const characterFound = await getCharacterId(id);

  if (!characterFound) {
    return false;
  }

  const characterArmorSlots = characterFound.inventory.armorSlots;
  const slotIndex = Number(slot);
  const armorToRemove = characterArmorSlots[slotIndex - 1];

  if (!armorToRemove) {
    return false;
  }

  characterFound.currentWeight -= armorToRemove.weight;
  characterArmorSlots.splice(slotIndex, 1);
  return true;
};
