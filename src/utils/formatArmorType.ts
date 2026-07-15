import { ArmorType } from "./hasTypeOfArmor";

export default function formatArmorType(armorType: ArmorType): string {
  switch (armorType) {
    case "Helmet":
      return "CAPACETE";
    case "Chestplate":
      return "PEITORAL";
    case "Pants":
      return "CALÇA";
    case "Boots":
      return "BOTAS";
    default:
      throw new Error("ARMADURA DESCONHECIDA");
  }
}
