import Router from "express";

const lootRouter = Router();

lootRouter.post("character/:id/draw/item");
lootRouter.post("character/:id/draw/armor");

export default lootRouter;
