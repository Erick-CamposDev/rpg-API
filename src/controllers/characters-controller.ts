import { Request, Response } from "express";
import getAllCharactersService from "../services/characters-services/getAllCharacters";
import getCharacterByIdService from "../services/characters-services/getCharacterById";
import idParamModel from "../models/paramsModel";

export async function getAllCharacters(req: Request, res: Response) {
  const data = await getAllCharactersService();

  res.status(data.statusCode).json(data.body);
}

export async function getCharacterById(
  req: Request<idParamModel>,
  res: Response,
) {
  const id = req.params.id;
  const data = await getCharacterByIdService(id);

  res.status(data.statusCode).json(data.body);
}
