import { ZodSafeParseResult } from "zod";
import { Response } from "express";
import z from "zod";
import { StatusCode } from "../enums/status-codes";

export default async function validParsedSchema<T, U>(
  res: Response,
  parsedSchema1: ZodSafeParseResult<T>,
  parsedSchema2?: ZodSafeParseResult<U>,
) {
  if (!parsedSchema1.success) {
    res.status(StatusCode.BAD_REQUEST).json({
      message: "ERROR: 0s dados enviados estão inválidos!",
      errors: z.flattenError(parsedSchema1.error).fieldErrors,
    });

    return false;
  }

  if (parsedSchema2 && !parsedSchema2.success) {
    res.status(StatusCode.BAD_REQUEST).json({
      message: "ERROR: 0s dados enviados estão inválidos!",
      errors: z.flattenError(parsedSchema2.error).fieldErrors,
    });

    return false;
  }

  return true;
}
