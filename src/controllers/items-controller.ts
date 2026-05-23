import getAllItemsService from "../services/items-services/getAllItems";
import { Request, Response } from "express";

export async function getAllItems(req: Request, res: Response) {
  const data = await getAllItemsService();

  res.status(data.statusCode).json(data.body);
}
