import z from "zod";
import {
  commonWeaponSchema,
  rareWeaponSchema,
  epicWeaponSchema,
  mythicWeaponSchema,
  legendaryWeaponSchema,
  commonArmorSchema,
  rareArmorSchema,
  epicArmorSchema,
  mythicArmorSchema,
  legendaryArmorSchema,
  lifePotionSchema,
  manaPotionSchema,
  defensePotionSchema,
  strengthPotionSchema,
} from "./itemSchema";

// SCHEMAS DE UPDATE PARA ARMAS
const updateCommonWeaponSchema = commonWeaponSchema
  .omit({
    id: true,
    rarity: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateRareWeaponSchema = rareWeaponSchema
  .omit({
    id: true,
    rarity: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateEpicWeaponSchema = epicWeaponSchema
  .omit({
    id: true,
    rarity: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateMythicWeaponSchema = mythicWeaponSchema
  .omit({
    id: true,
    rarity: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateLegendaryWeaponSchema = legendaryWeaponSchema
  .omit({
    id: true,
    rarity: true,
    itemType: true,
  })
  .partial()
  .strict();

// SCHEMAS DE UPDATE PARA ARMADURAS
const updateCommonArmorSchema = commonArmorSchema
  .omit({
    id: true,
    rarity: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateRareArmorSchema = rareArmorSchema
  .omit({
    id: true,
    rarity: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateEpicArmorSchema = epicArmorSchema
  .omit({
    id: true,
    rarity: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateMythicArmorSchema = mythicArmorSchema
  .omit({
    id: true,
    rarity: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateLegendaryArmorSchema = legendaryArmorSchema
  .omit({
    id: true,
    rarity: true,
    itemType: true,
  })
  .partial()
  .strict();

// SCHEMAS DE UPDATE PARA CONSUMÍVEIS
const updateLifePotionSchema = lifePotionSchema
  .omit({
    id: true,
    type: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateManaPotionSchema = manaPotionSchema
  .omit({
    id: true,
    type: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateDefensePotionSchema = defensePotionSchema
  .omit({
    id: true,
    type: true,
    itemType: true,
  })
  .partial()
  .strict();

const updateStrengthPotionSchema = strengthPotionSchema
  .omit({
    id: true,
    type: true,
    itemType: true,
  })
  .partial()
  .strict();

// UNIONS DE SCHEMAS UPDATE
export const updateWeaponsSchema = z.union([
  updateCommonWeaponSchema,
  updateRareWeaponSchema,
  updateEpicWeaponSchema,
  updateMythicWeaponSchema,
  updateLegendaryWeaponSchema,
]);

export const updateArmorSchema = z.union([
  updateCommonArmorSchema,
  updateRareArmorSchema,
  updateEpicArmorSchema,
  updateMythicArmorSchema,
  updateLegendaryArmorSchema,
]);

export const updatePotionsSchema = z.union([
  updateLifePotionSchema,
  updateManaPotionSchema,
  updateDefensePotionSchema,
  updateStrengthPotionSchema,
]);

// UNION DE TODAS AS UNIONS
export const updateItemsSchema = z.union([
  updateCommonWeaponSchema,
  updateRareWeaponSchema,
  updateEpicWeaponSchema,
  updateMythicWeaponSchema,
  updateLegendaryWeaponSchema,

  updateCommonArmorSchema,
  updateRareArmorSchema,
  updateEpicArmorSchema,
  updateMythicArmorSchema,
  updateLegendaryArmorSchema,

  updateLifePotionSchema,
  updateManaPotionSchema,
  updateDefensePotionSchema,
  updateStrengthPotionSchema,
]);

// TYPES
export type updateWeapons = z.infer<typeof updateWeaponsSchema>;
export type updateArmors = z.infer<typeof updateArmorSchema>;
export type updatePotions = z.infer<typeof updatePotionsSchema>;
export type updateItems = updateWeapons | updateArmors | updatePotions;
