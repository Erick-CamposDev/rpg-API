import Router from "express";
import { getCharacterInventoryById } from "../controllers/inventory-controller";

const inventoryRoute = Router();

inventoryRoute.get("/characters/:id/inventory", getCharacterInventoryById);

export default inventoryRoute;
