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

export const deleteItemId = async (id: string) => {
  const index = itemData.findIndex((item: items) => parseInt(id) === item.id);

  if (index === -1) {
    return false;
  }

  itemData.splice(index, 1);
  return true;
};

export const createItem = async (body: items) => {
  itemData.push(body);
};

export const updateItemId = async <T>(id: string, body: T) => {
  const foundItem = await getItemId(id);

  if (!foundItem) {
    return false;
  }

  Object.assign(foundItem, body);
  return true;
};
