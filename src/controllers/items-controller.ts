import idParamModel from "../models/paramsModel";
import { queryItemModel } from "../models/queryItemModel";
import createNewItemService from "../services/items-services/createNewItem";
import deleteItemByIdService from "../services/items-services/deleteItemById";
import getAllItemsService from "../services/items-services/getAllItems";
import getItemByIdService from "../services/items-services/getItemById";
import getItemByRarityOrTypeService from "../services/items-services/getItemByRarityOrType";
import { Request, Response } from "express";

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
