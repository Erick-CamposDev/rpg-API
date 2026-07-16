import { itemData } from "../data/item-data";
import { items } from "../schemas/itemSchema";

export const drawRandomItem = async () => {
  const itemsWithoutArmors = itemData.filter(
    (item: items) => item.itemType !== "Armor",
  );

  const randomIndex = Math.floor(Math.random() * itemsWithoutArmors.length);

  return itemsWithoutArmors[randomIndex];
};

export const drawRandomArmor = async () => {
  const armorData = itemData.filter((item: items) => item.itemType === "Armor");

  const randomIndex = Math.floor(Math.random() * armorData.length);

  return armorData[randomIndex];
};
