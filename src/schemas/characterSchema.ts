import { z } from "zod";
import { inventorySchema } from "./invetorySchema";

const warriorSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.literal("Warrior"),
  baseAttackDamage: z.number().min(40),
  baseDefense: z.number().min(10),
  baseHealthPoints: z.number().min(100),
  level: z.number().min(0).max(100),
  maxWeight: z.number(),
  inventory: inventorySchema,
});

const tankSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.literal("Tank"),
  baseAttackDamage: z.number().min(25),
  baseDefense: z.number().min(50),
  baseHealthPoints: z.number().min(120),
  level: z.number().min(0).max(100),
  maxWeight: z.number(),
  inventory: inventorySchema,
});

const mageSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.literal("Mage"),
  baseAttackDamage: z.number().min(20),
  baseManaPoints: z.number().min(30).max(100),
  baseDefense: z.number().min(10),
  baseHealthPoints: z.number().min(100),
  level: z.number().min(0).max(100),
  maxWeight: z.number(),
  inventory: inventorySchema,
});

export type Character =
  | z.infer<typeof warriorSchema>
  | z.infer<typeof tankSchema>
  | z.infer<typeof mageSchema>;
