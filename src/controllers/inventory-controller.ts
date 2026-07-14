import { Request, Response } from "express";
import idParamModel from "../models/paramsModel";
import getCharacterInventoryService from "../services/inventory-services/getCharacterInventory";
import { potions, weapons } from "../schemas/itemSchema";
import addItemInInventoryService from "../services/inventory-services/addItemInInentory";

export async function getCharacterInventoryById(
  req: Request<idParamModel>,
  res: Response,
) {
  const id = req.params.id;

  const data = await getCharacterInventoryService(id);

  res.status(data.statusCode).json(data.body);
}

export async function addItemInCharacterInventory(
  req: Request<idParamModel>,
  res: Response,
) {
  const id = req.params.id;
  const body: potions | weapons = req.body;

  const data = await addItemInInventoryService(id, body);

  res.status(data.statusCode).json(data.body);
}

export async function equipArmor(req: Request<idParamModel>, res: Response) {}

export async function deleteItemInInventory(
  req: Request<idParamModel>,
  res: Response,
) {}

export async function unequipArmor(req: Request<idParamModel>, res: Response) {}
