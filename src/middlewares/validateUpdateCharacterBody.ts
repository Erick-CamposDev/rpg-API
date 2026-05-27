import { Request, Response, NextFunction } from "express";
import { updatedSchemas } from "../schemas/updateCharacterSchemas";
import { StatusCode } from "../enums/status-codes";
import z from "zod";
import idParamModel from "../models/paramsModel";

export default async function validateCharacterBodyUpdate(
  req: Request<idParamModel>,
  res: Response,
  next: NextFunction,
) {
  const validatedSchema = updatedSchemas.safeParse(req.body);

  if (!validatedSchema.success) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: "ERRO: Os dados enviados estão inválidos!",
      errors: z.flattenError(validatedSchema.error).fieldErrors,
    });
  }

  next();
}
