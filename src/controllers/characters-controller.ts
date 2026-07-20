import { Request, RequestHandler, Response } from "express";
import getAllCharactersService from "../services/characters-services/getAllCharacters";
import getCharacterByIdService from "../services/characters-services/getCharacterById";
import deleteCharacterByIdService from "../services/characters-services/deleteCharacterById";
import idParamModel from "../models/paramsModel";
import { Character } from "../schemas/characterSchema";
import createNewCharacterService from "../services/characters-services/createNewCharacter";
import updateCharacterByIdService from "../services/characters-services/updateCharacterById";
import { UpdatedCharacter } from "../schemas/updateCharacterSchemas";

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

export async function deleteCharacterById(
  req: Request<idParamModel>,
  res: Response,
) {
  const id = req.params.id;
  const data = await deleteCharacterByIdService(id);

  res.status(data.statusCode).json(data.body);
}

export async function createNewCharacter(req: Request, res: Response) {
  const body: Character = req.body;

  const data = await createNewCharacterService(body);

  res.status(data.statusCode).json(data.body);
}

export const updateCharacterById: RequestHandler<idParamModel> = async (
  req,
  res,
) => {
  const body: UpdatedCharacter = req.body;
  const id = req.params.id;

  const data = await updateCharacterByIdService(id, body);

  res.status(data.statusCode).json(data.body);
};
