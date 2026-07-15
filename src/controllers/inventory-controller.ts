import { Request, Response } from "express";
import idParamModel from "../models/paramsModel";
import getCharacterInventoryService from "../services/inventory-services/getCharacterInventory";
import { armors, potions, weapons } from "../schemas/itemSchema";
import addItemInInventoryService from "../services/inventory-services/addItemInInentory";
import equipArmorService from "../services/inventory-services/equipArmor";
import deleteItemInInventoryService from "../services/inventory-services/deleteItemInInventory";

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

export async function equipArmor(req: Request<idParamModel>, res: Response) {
  const id = req.params.id;
  const body: armors = req.body;

  const data = await equipArmorService(id, body);

  res.status(data.statusCode).json(data.body);
}

export async function deleteItemInInventory(
  req: Request<idParamModel>,
  res: Response,
) {
  const id = req.params.id;
  const itemSlot = req.params.slot;

  const data = await deleteItemInInventoryService(id, itemSlot);

  res.status(data.statusCode).json(data.body);
}

export async function unequipArmor(req: Request<idParamModel>, res: Response) {}
