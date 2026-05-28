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

const itemRouter = Router();

itemRouter.get("/items", getAllItems);
itemRouter.get("/items/select", getItemsByRarityOrType);
itemRouter.get("/items/:id", getItemById);

itemRouter.delete("/items/:id", deleteItemById);

itemRouter.post("/items", validateItemBody, createNewItem);

itemRouter.patch("/items/:id", validateUpdateItemBody, updateItemById);

export default itemRouter;
