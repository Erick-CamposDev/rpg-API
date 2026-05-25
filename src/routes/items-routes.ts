import { Router } from "express";
import {
  deleteItemById,
  getAllItems,
  getItemById,
  getItemsByRarityOrType,
} from "../controllers/items-controller";

const itemRouter = Router();

itemRouter.get("/items", getAllItems);
itemRouter.get("/items/select", getItemsByRarityOrType);
itemRouter.get("/items/:id", getItemById);

itemRouter.delete("/items/:id", deleteItemById);

export default itemRouter;
