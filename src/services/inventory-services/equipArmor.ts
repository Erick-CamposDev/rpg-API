import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getCharacterId } from "../../repositories/characters-repository";
import { equipArmorRepo } from "../../repositories/inventories-repository";
import { Character } from "../../schemas/characterSchema";
import { armors } from "../../schemas/itemSchema";
import formatArmorType from "../../utils/formatArmorType";
import hasTypeOfArmor from "../../utils/hasTypeOfArmor";

export default async function equipArmorService(
  id: string,
  body: armors,
): Promise<responseModel<string>> {
  const foundCharacter = await getCharacterId(id);

  if (!foundCharacter) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: Character not found!",
    };
  }

  const characterArmorSlots = foundCharacter.inventory.armorSlots;

  if (characterArmorSlots.length >= 4) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "ERROR: Limite de slots de armaduras atingido!",
    };
  }

  if (foundCharacter.currentWeight > foundCharacter.maxWeight) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "LIMITE DE PESO TOTAL DO PERSONAGEM ATINGIDO!",
    };
  }

  const armorTypes = body.armorType as Array<
    "Helmet" | "Chestplate" | "Pants" | "Boots"
  >;

  for (const armorType of armorTypes) {
    const hasAlreadyType = await hasTypeOfArmor(armorType, characterArmorSlots);

    if (hasAlreadyType) {
      return {
        statusCode: StatusCode.BAD_REQUEST,
        body: `ERRO: O PERSONAGEM JÁ POSSUI ${formatArmorType(armorType)}`,
      };
    }
  }

  await equipArmorRepo(id, body);

  return {
    statusCode: StatusCode.OK,
    body: "Armor equiped sucessfully!",
  };
}
