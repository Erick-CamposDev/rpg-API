import { Router } from "express";
import {
  createNewItem,
  deleteItemById,
  getAllItems,
  getItemById,
  getItemsByRarityOrType,
} from "../controllers/items-controller";
import validateItemBody from "../middlewares/validateItemBody";

const itemRouter = Router();

itemRouter.get("/items", getAllItems);
itemRouter.get("/items/select", getItemsByRarityOrType);
itemRouter.get("/items/:id", getItemById);

itemRouter.delete("/items/:id", deleteItemById);

itemRouter.post("/items", validateItemBody, createNewItem);

export default itemRouter;
