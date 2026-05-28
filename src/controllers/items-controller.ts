import idParamModel from "../models/paramsModel";
import { queryItemModel } from "../models/queryItemModel";
import { updateItems } from "../schemas/updateItemSchemas";
import createNewItemService from "../services/items-services/createNewItem";
import deleteItemByIdService from "../services/items-services/deleteItemById";
import getAllItemsService from "../services/items-services/getAllItems";
import getItemByIdService from "../services/items-services/getItemById";
import getItemByRarityOrTypeService from "../services/items-services/getItemByRarityOrType";
import { Request, Response } from "express";
import updateItemByIdService from "../services/items-services/updateItemById";

export async function getAllItems(req: Request, res: Response) {
  const data = await getAllItemsService();

  res.status(data.statusCode).json(data.body);
}

export async function getItemsByRarityOrType(
  req: Request<{}, {}, {}, queryItemModel>,
  res: Response,
) {
  const { rarity, type } = req.query;

  const data = await getItemByRarityOrTypeService(rarity, type);

  res.status(data.statusCode).json(data.body);
}

export async function getItemById(req: Request<idParamModel>, res: Response) {
  const id = req.params.id;

  const data = await getItemByIdService(id);

  res.status(data.statusCode).json(data.body);
}

export async function deleteItemById(
  req: Request<idParamModel>,
  res: Response,
) {
  const id = req.params.id;

  const data = await deleteItemByIdService(id);

  res.status(data.statusCode).json(data.body);
}

export async function createNewItem(req: Request, res: Response) {
  const body = req.body;

  const data = await createNewItemService(body);

  res.status(data.statusCode).json(data.body);
}

export async function updateItemById(
  req: Request<idParamModel>,
  res: Response,
) {
  const body: updateItems = req.body;
  const id = req.params.id;

  const data = await updateItemByIdService(id, body);

  res.status(data.statusCode).json(data.body);
}
