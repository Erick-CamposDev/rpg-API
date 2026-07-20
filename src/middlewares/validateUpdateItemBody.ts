import { Request, Response, NextFunction } from "express";
import z from "zod";
import idParamModel from "../models/paramsModel";
import { updateItemsSchema } from "../schemas/updateItemSchemas";
import { StatusCode } from "../enums/status-codes";

export default async function validateUpdateItemBody(
  req: Request<idParamModel>,
  res: Response,
  next: NextFunction,
) {
  const validatedSchema = updateItemsSchema.safeParse(req.body);

  if (!validatedSchema.success) {
    res.status(StatusCode.BAD_REQUEST).json({
      message: "ERRO: Os dados enviados estão inválidos!",
      errors: z.flattenError(validatedSchema.error).fieldErrors,
    });
  }                                                                 

  next();
}
