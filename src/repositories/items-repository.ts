import { itemData } from "../data/item-data";
import { items } from "../schemas/itemSchema";

export const getItems = async () => {
  return itemData;
};

export const getItemRarityOrType = async (rarity?: string, type?: string) => {
  const itemFiltered = itemData.filter((item: items) => {
    if (rarity && type) {
      if (item.itemType === "Consumable") {
        return false;
      }

      return (
        rarity.toLowerCase() === item.rarity.toLowerCase() &&
        type.toLowerCase() === item.itemType.toLowerCase()
      );
    }

    if (rarity) {
      if (item.itemType === "Consumable") {
        return false;
      }

      return rarity.toLowerCase() === item.rarity.toLowerCase();
    }

    if (type) {
      return type.toLowerCase() === item.itemType.toLowerCase();
    }

    return true;
  });

  return itemFiltered;
};
