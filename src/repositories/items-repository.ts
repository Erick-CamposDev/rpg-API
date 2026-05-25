import { itemData } from "../data/item-data";
import { items } from "../schemas/itemSchema";

export const getItems = async () => {
  return itemData;
};

export const getItemRarityOrType = async (rarity?: string, type?: string) => {
  const itemFiltered = itemData.filter((item: items) => {
    if (rarity && type) {
      if ("rarity" in item) {
        return (
          rarity.toLowerCase() === item.rarity.toLowerCase() &&
          type.toLowerCase() === item.itemType.toLowerCase()
        );
      }
      return false;
    }

    if (rarity) {
      if ("rarity" in item) {
        return rarity.toLowerCase() === item.rarity.toLowerCase();
      }

      return false;
    }

    if (type) {
      return type.toLowerCase() === item.itemType.toLowerCase();
    }

    return true;
  });

  return itemFiltered;
};

export const getItemId = async (id: string) => {
  const foundItem = itemData.find((item: items) => parseInt(id) === item.id);

  return foundItem;
};
