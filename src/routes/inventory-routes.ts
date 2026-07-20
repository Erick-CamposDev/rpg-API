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
import {
  armorSchema,
  potionsSchema,
  weaponsSchema,
} from "../schemas/itemSchema";
import validateBody from "../middlewares/validateBody";

const inventoryRoute = Router();

inventoryRoute.get("/characters/:id/inventory", getCharacterInventoryById);

inventoryRoute.post(
  "/characters/:id/inventory/items",
  validateBody(weaponsSchema, potionsSchema),
  addItemInCharacterInventory,
);
inventoryRoute.post(
  "/characters/:id/inventory/armors",
  validateBody(armorSchema),
  equipArmor,
);

inventoryRoute.delete(
  "/characters/:id/inventory/items/:slot",
  deleteItemInInventory,
);
inventoryRoute.delete("/characters/:id/inventory/armors/:slot", unequipArmor);

export default inventoryRoute;
