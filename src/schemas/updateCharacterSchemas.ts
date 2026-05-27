import { mageSchema, tankSchema, warriorSchema } from "./characterSchema";
import z from "zod";

const updateWarriorSchema = warriorSchema
  .omit({
    id: true,
    inventory: true,
    type: true,
  })
  .strict();

const updateTankSchema = tankSchema
  .omit({
    id: true,
    inventory: true,
    type: true,
  })
  .partial()
  .strict();

const updateMageSchema = mageSchema
  .omit({
    id: true,
    inventory: true,
    type: true,
  })
  .partial()
  .strict();

export const updatedSchemas = z.union([
  updateWarriorSchema,
  updateMageSchema,
  updateTankSchema,
]);

export type UpdatedCharacter =
  | z.infer<typeof updateWarriorSchema>
  | z.infer<typeof updateMageSchema>
  | z.infer<typeof updateTankSchema>;
