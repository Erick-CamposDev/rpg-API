import { Router } from "express";
import {
  getAllItems,
  getItemsByRarityOrType,
} from "../controllers/items-controller";

const itemRouter = Router();

itemRouter.get("/items", getAllItems);
itemRouter.get("/items/select", getItemsByRarityOrType);

export default itemRouter;
