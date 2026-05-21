import { z } from "zod";
import { armorSchema, potionsSchema, weaponsSchema } from "./itemSchema";

export const inventorySchema = z.object({
  armorSlots: z.array(armorSchema),
  items: z.array(z.union([potionsSchema, weaponsSchema])),
});
