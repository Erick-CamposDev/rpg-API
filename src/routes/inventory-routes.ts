import { Router } from "express";
import {
  addItemInCharacterInventory,
  deleteItemInInventory,
  equipArmor,
  getCharacterInventoryById,
  unequipArmor,
} from "../controllers/inventory-controller";
import validateArmorBody from "../middlewares/validateArmorBody";
import validateWeaponAndConsumable from "../middlewares/validateWeaponAndConsumable";

const inventoryRoute = Router();

inventoryRoute.get("/characters/:id/inventory", getCharacterInventoryById);

inventoryRoute.post(
  "/characters/:id/inventory/items",
  validateWeaponAndConsumable,
  addItemInCharacterInventory,
);
inventoryRoute.post(
  "/characters/:id/inventory/armors",
  validateArmorBody,
  equipArmor,
);

inventoryRoute.delete(
  "/characters/:id/inventory/items/:slot",
  deleteItemInInventory,
);
inventoryRoute.delete("/characters/:id/inventory/armors/:slot", unequipArmor);

export default inventoryRoute;
