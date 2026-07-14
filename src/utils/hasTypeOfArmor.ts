import { armors } from "../schemas/itemSchema";

type ArmorType = "Helmet" | "Chestplate" | "Pants" | "Boots";

export default async function hasTypeOfArmor(
  type: ArmorType,
  slots: armors[],
): Promise<boolean> {
  return slots.some((armor: armors) => armor.armorType.includes(type));
}
