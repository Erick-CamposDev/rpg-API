import { Request, Response, NextFunction } from "express";
import z from "zod";
import { itemsSchema } from "../schemas/itemSchema";
import { StatusCode } from "../enums/status-codes";

export default async function validateItemBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const validatedSchema = itemsSchema.safeParse(req.body);

  if (!validatedSchema.success) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: "ERROR: Os dados enviados estão inválidos!",
      errors: z.flattenError(validatedSchema.error).fieldErrors,
    });
  }

  next();
}
