import { Request, Response, NextFunction } from "express";
import validParsedSchema from "../utils/validParsedSchema";
import idParamModel from "../models/paramsModel";

import { ZodType } from "zod";

export default function validateBodySchema(schema: ZodType, schema2?: ZodType) {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (schema && !schema2) {
      const validatedSchema = schema.safeParse(req.body);
      const isValid = await validParsedSchema(res, validatedSchema);

      if (!isValid) return;
      next();
    }

    if (schema && schema2) {
      const validatedSchema = schema.safeParse(req.body);
      const validatedSchema2 = schema2.safeParse(req.body);
      const isValid = await validParsedSchema(
        res,
        validatedSchema,
        validatedSchema2,
      );

      if (!isValid) return;
      next();
    }
  };
}
