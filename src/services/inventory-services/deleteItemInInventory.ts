import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getCharacterId } from "../../repositories/characters-repository";

export default async function deleteItemInInventoryService(
  id: string,
  slot: string,
): Promise<responseModel<string>> {
  const foundCharacter = await getCharacterId(id);

  if (!foundCharacter) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: CHARACTER NOT FOUND",
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: "Item deleted successfully",
  };
}
