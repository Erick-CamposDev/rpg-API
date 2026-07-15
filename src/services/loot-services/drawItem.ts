import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getCharacterId } from "../../repositories/characters-repository";
import { drawRandomItem } from "../../repositories/loot-repository";

export default async function drawItemService(
  id: string,
): Promise<responseModel<typeof itemRepository | string>> {
  const itemRepository = await drawRandomItem(id);

  if (!itemRepository) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: Character not found!",
    };
  }

  return {
    statusCode: StatusCode.CREATED,
    message: `O ITEM SORTEADO FOI ${itemRepository.name}`,
    body: itemRepository,
  };
}
