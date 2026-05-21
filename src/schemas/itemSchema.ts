import z from "zod";

//SCHEMAS DE ARMAS
const commonWeaponSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  rarity: z.literal("Common"),
  damage: z.number().min(5).max(15),
});

const rareWeaponSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  rarity: z.literal("Rare"),
  damage: z.number().min(15).max(25),
});

const epicWeaponSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  rarity: z.literal("Common"),
  damage: z.number().min(25).max(35),
  bonus: z.number().min(0.1).max(1),
});

const mythicWeaponSchema = z.object({
  id: z.number(),
  name: z.string(),
  rarity: z.literal("Common"),
  damage: z.number().min(36).max(40),
  bonus: z.number().min(0.5).max(1.5),
});

const legendaryWeaponSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  rarity: z.literal("Common"),
  damage: z.number().min(40).max(50),
  bonus: z.number().min(1).max(2),
  specialAttack: z.string(),
});

export const weaponsSchema = z.discriminatedUnion("rarity", [
  commonWeaponSchema,
  rareWeaponSchema,
  epicWeaponSchema,
  mythicWeaponSchema,
  legendaryWeaponSchema,
]);

//SCHEMAS DE ARMADURAS

const commonArmorSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  defense: z.number().min(5).max(15),
  rarity: z.literal("Common"),
  armorType: z.array(z.enum(["Helmet", "Chestplate", "Pants", "Boots"])),
});

const rareArmorSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  defense: z.number().min(15).max(25),
  rarity: z.literal("Rare"),
  armorType: z.array(z.enum(["Helmet", "Chestplate", "Pants", "Boots"])),
});

const epicArmorSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  defense: z.number().min(25).max(35),
  rarity: z.literal("Epic"),
  bonus: z.number().min(0.1).max(0.5),
  armorType: z.array(z.enum(["Helmet", "Chestplate", "Pants", "Boots"])),
});

const mythicArmorSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  defense: z.number().min(36).max(40),
  rarity: z.literal("Mythic"),
  bonus: z.number().min(0.5).max(1),
  armorType: z.array(z.enum(["Helmet", "Chestplate", "Pants", "Boots"])),
});

const legendaryArmorSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  defense: z.number().min(40).max(50),
  rarity: z.literal("Legendary"),
  bonus: z.number().min(1).max(2),
  armorType: z.array(z.enum(["Helmet", "Chestplate", "Pants", "Boots"])),
});

export const armorSchema = z.discriminatedUnion("rarity", [
  commonArmorSchema,
  rareArmorSchema,
  epicArmorSchema,
  mythicArmorSchema,
  legendaryArmorSchema,
]);

//SCHEMAS DE CONSUMÍVEIS

const lifePotionSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  type: z.literal("life"),
  lifeToRestore: z.number().min(1).max(100),
});

const manaPotionSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  type: z.literal("mana"),
  manaToRestore: z.number().min(1).max(100),
});

const defensePotionSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  type: z.literal("defense"),
  defenseToIncrease: z.number().min(2).max(5),
});

const strengthPotionSchema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
  type: z.literal("strength"),
  manaToRestore: z.number().min(1).max(100),
  strengthToIncrease: z.number().min(2).max(5),
});

export const potionsSchema = z.discriminatedUnion("type", [
  lifePotionSchema,
  manaPotionSchema,
  defensePotionSchema,
  strengthPotionSchema,
]);

export type items =
  | z.infer<typeof weaponsSchema>
  | z.infer<typeof armorSchema>
  | z.infer<typeof potionsSchema>;
