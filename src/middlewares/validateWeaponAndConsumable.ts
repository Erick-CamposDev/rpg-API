import { Request, Response, NextFunction } from "express";
import { potionsSchema, weaponsSchema } from "../schemas/itemSchema";
import validParsedSchema from "../utils/validParsedSchema";
import idParamModel from "../models/paramsModel";

export default async function validateArmorBody(
  req: Request<idParamModel>,
  res: Response,
  next: NextFunction,
) {
  const validatedWeaponSchema = weaponsSchema.safeParse(req.body);
  const validatedConsumableSchema = potionsSchema.safeParse(req.body);

  const isValid = await validParsedSchema(
    res,
    validatedWeaponSchema,
    validatedConsumableSchema,
  );

  if (!isValid) return;

  next();
}
