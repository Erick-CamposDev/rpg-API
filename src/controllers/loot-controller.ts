import idParamModel from "../models/paramsModel";
import { Request, Response } from "express";
import drawArmorService from "../services/loot-services/drawArmor";
import drawItemService from "../services/loot-services/drawItem";

export async function drawItem(req: Request<idParamModel>, res: Response) {
  const id = req.params.id;
  const data = await drawItemService(id);

  res.status(data.statusCode).json(data.body);
}

export async function drawArmor(req: Request<idParamModel>, res: Response) {
  const id = req.params.id;
  const data = await drawArmorService(id);

  res.status(data.statusCode).json(data.body);
}
