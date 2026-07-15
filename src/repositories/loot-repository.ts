import { itemData } from "../data/item-data";
import { items } from "../schemas/itemSchema";
import { getCharacterId } from "./characters-repository";

export const drawRandomItem = async (id: string) => {
  const itemsWithoutArmors = itemData.filter(
    (item: items) => item.itemType !== "Armor",
  );

  const randomIndex = Math.floor(Math.random() * itemsWithoutArmors.length + 1);

  const foundPlayer = await getCharacterId(id);

  if (!foundPlayer) {
    return false;
  }

  foundPlayer.inventory.items.push(itemsWithoutArmors[randomIndex]);

  return itemsWithoutArmors[randomIndex];
};

export const drawRandomArmor = async () => {
  const armorData = itemData.filter((item: items) => item.itemType === "Armor");

  const randomIndex = Math.floor(Math.random() * armorData.length);

  return armorData[randomIndex];
};
