import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getCharacterId } from "../../repositories/characters-repository";
import { drawRandomItem } from "../../repositories/loot-repository";
import { items } from "../../schemas/itemSchema";

export default async function drawItemService(
  id: string,
): Promise<responseModel<typeof itemRepository | string>> {
  const characterInformation = await getCharacterId(id);
  const itemRepository = await drawRandomItem(id);

  if (!characterInformation) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: Character not found!",
    };
  }

  return {
    statusCode: StatusCode.CREATED,
    body: itemRepository,
  };
}
