import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getCharacterId } from "../../repositories/characters-repository";
import { addItemInInventory } from "../../repositories/inventories-repository";
import { potions, weapons } from "../../schemas/itemSchema";

export default async function addItemInInventoryService(
  id: string,
  body: weapons | potions,
): Promise<responseModel<string>> {
  const characterFound = await getCharacterId(id);

  if (!characterFound) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: Character not found!",
    };
  }

  if (characterFound.currentWeight >= characterFound?.maxWeight) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "ERROR: LIMITE DE PESO TOTAL DO PERSONAGEM ATINGIDO!",
    };
  }

  await addItemInInventory(id, body);
  return {
    statusCode: StatusCode.CREATED,
    body: `Added new item in Character: ${characterFound.name} successfully!`,
  };
}
