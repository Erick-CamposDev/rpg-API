import { Router } from "express";
import { getAllItems } from "../controllers/items-controller";

const itemRouter = Router();

itemRouter.get("/items", getAllItems);

export default itemRouter;
