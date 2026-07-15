import Router from "express";
import { drawArmor, drawItem } from "../controllers/loot-controller";

const lootRouter = Router();

lootRouter.post("/characters/:id/draw/item", drawItem);
lootRouter.post("/characters/:id/draw/armor", drawArmor);

export default lootRouter;
