import idParamModel from "../models/paramsModel";
import { queryItemModel } from "../models/queryItemModel";
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
