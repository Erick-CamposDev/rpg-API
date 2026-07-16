import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getCharacterId } from "../../repositories/characters-repository";
import { equipArmorRepo } from "../../repositories/inventories-repository";
import { drawRandomArmor } from "../../repositories/loot-repository";
import formatArmorType from "../../utils/formatArmorType";
import hasTypeOfArmor from "../../utils/hasTypeOfArmor";

export default async function drawArmorService(
  id: string,
): Promise<responseModel<string>> {
  const foundCharacter = await getCharacterId(id);

  if (!foundCharacter) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: Character not found!",
    };
  }

  const randomArmor = await drawRandomArmor();
  const characterArmorSlots = foundCharacter?.inventory.armorSlots;

  if (characterArmorSlots?.length >= 4) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "ERROR: Limite de slots de armadura atingidos!",
    };
  }

  if (foundCharacter.currentWeight >= foundCharacter.maxWeight) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "LIMITE DE PESO TOTAL DO PERSONAGEM ATINGIDO!",
    };
  }

  const armorTypes = randomArmor.armorType as Array<
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

  await equipArmorRepo(id, randomArmor);

  return {
    statusCode: StatusCode.CREATED,
    body: `A armadura sorteada foi ${randomArmor.name}! Foi equipada com sucesso!`,
  };
}
