import { Router } from "express";
import {
  getAllItems,
  getItemById,
  getItemsByRarityOrType,
} from "../controllers/items-controller";

const itemRouter = Router();

itemRouter.get("/items", getAllItems);
itemRouter.get("/items/select", getItemsByRarityOrType);
itemRouter.get("/items/:id", getItemById);

export default itemRouter;
