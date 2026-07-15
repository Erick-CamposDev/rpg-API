import { Request, Response, NextFunction } from "express";
import { armorSchema } from "../schemas/itemSchema";
import { StatusCode } from "../enums/status-codes";
import z from "zod";
import idParamModel from "../models/paramsModel";

export default async function validateArmorBody(
  req: Request<idParamModel>,
  res: Response,
  next: NextFunction,
) {
  const validatedSchema = armorSchema.safeParse(req.body);

  if (!validatedSchema.success) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: "ERROR: Os dados enviados estão inválidos!",
      errors: z.flattenError(validatedSchema.error).fieldErrors,
    });
  }

  next();
}
