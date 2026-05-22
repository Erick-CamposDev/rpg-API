import { Request, Response } from "express";

export async function getAllCharacters(req: Request, res: Response) {
  const data = await getAllCharactersServices();

  res.status(data.status).json(data.body);
}
