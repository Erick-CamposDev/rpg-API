import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { deleteItemInCharacterInventory } from "../../repositories/inventories-repository";

export default async function deleteItemInInventoryService(
  id: string,
  slot: string,
): Promise<responseModel<string>> {
  const isDeleted = await deleteItemInCharacterInventory(id, slot);

  if (!isDeleted) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: Character or Item NOT FOUND",
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: "Item deleted successfully",
  };
}
