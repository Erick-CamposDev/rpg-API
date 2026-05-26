import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getCharacterInventory } from "../../repositories/inventories-repository";

export default async function getCharacterInventoryService(
  id: string,
): Promise<responseModel> {
  const repositoryData = await getCharacterInventory(id);

  if (!repositoryData) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: CHARACTER NOT FOUND!",
    };
  }

  if (
    repositoryData.armorSlots.length === 0 &&
    repositoryData.items.length === 0
  ) {
    return {
      statusCode: StatusCode.NO_CONTENT,
      body: "NO CONTENT",
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: repositoryData,
  };
}
