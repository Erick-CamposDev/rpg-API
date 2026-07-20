import { Router } from "express";
import {
  createNewItem,
  deleteItemById,
  getAllItems,
  getItemById,
  getItemsByRarityOrType,
  updateItemById,
} from "../controllers/items-controller";
import validateItemBody from "../middlewares/validateItemBody";
import validateUpdateItemBody from "../middlewares/validateUpdateItemBody";
import { itemsSchema } from "../schemas/itemSchema";
import validateBodySchema from "../middlewares/validateBody";
import { updateItemsSchema } from "../schemas/updateItemSchemas";

const itemRouter = Router();

itemRouter.get("/items", getAllItems);
itemRouter.get("/items/select", getItemsByRarityOrType);
itemRouter.get("/items/:id", getItemById);

itemRouter.delete("/items/:id", deleteItemById);

itemRouter.post("/items", validateBodySchema(itemsSchema), createNewItem);

itemRouter.patch(
  "/items/:id",
  validateBodySchema(updateItemsSchema),
  updateItemById,
);

export default itemRouter;
