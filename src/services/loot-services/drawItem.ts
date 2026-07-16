import { StatusCode } from "../../enums/status-codes";
import { LootResponseModel } from "../../models/lootResponseMode";
import { responseModel } from "../../models/responseModel";
import { getCharacterId } from "../../repositories/characters-repository";
import { addItemInInventory } from "../../repositories/inventories-repository";
import { drawRandomItem } from "../../repositories/loot-repository";

export default async function drawItemService(
  id: string,
): Promise<responseModel<LootResponseModel<typeof itemRepository> | string>> {
  const itemRepository = await drawRandomItem();
  const foundCharacter = await getCharacterId(id);

  if (!itemRepository) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "ERROR: Erro ao sortear item!",
    };
  }

  if (!foundCharacter) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: Character not found!",
    };
  }

  if (foundCharacter.currentWeight >= foundCharacter.maxWeight) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "ERROR: LIMITE DE PESO TOTAL DO PERSONAGEM ATINGIDO!",
    };
  }

  await addItemInInventory(id, itemRepository);

  return {
    statusCode: StatusCode.CREATED,
    body: {
      message: {
        text: `O item sorteado foi ${itemRepository.name}`,
      },
      data: itemRepository,
    },
  };
}
