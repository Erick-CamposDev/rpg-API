import { Request, Response, NextFunction } from "express";
import { characterSchema } from "../schemas/characterSchema";
import z from "zod";
import { StatusCode } from "../enums/status-codes";

export default async function validateCharacterBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const validatedSchema = characterSchema.safeParse(req.body);

  if (!validatedSchema.success) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: "ERROR: Os dados enviados estão inválidos!",
      error: z.flattenError(validatedSchema.error).fieldErrors,
    });
  }

  next();
}
