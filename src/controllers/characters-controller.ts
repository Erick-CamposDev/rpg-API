import { Request, Response } from "express";
import getAllCharactersService from "../services/characters-services/getAllCharacters";

export async function getAllCharacters(req: Request, res: Response) {
  const data = await getAllCharactersService();

  res.status(data.statusCode).json(data.body);
}
