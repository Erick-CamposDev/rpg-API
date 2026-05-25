import { queryItemModel } from "../models/queryItemModel";
import getAllItemsService from "../services/items-services/getAllItems";
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
