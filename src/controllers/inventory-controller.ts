import { Request, Response } from "express";
import idParamModel from "../models/paramsModel";
import getCharacterInventoryService from "../services/inventory-services/getCharacterInventory";

export async function getCharacterInventoryById(
  req: Request<idParamModel>,
  res: Response,
) {
  const id = req.params.id;

  const data = await getCharacterInventoryService(id);

  res.status(data.statusCode).json(data.body);
}
