import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getCharacterId } from "../../repositories/characters-repository";
import { unequipCharacterArmor } from "../../repositories/inventories-repository";

export default async function unequipArmorService(
  id: string,
  slot: string,
): Promise<responseModel<string>> {
  const characterFound = await getCharacterId(id);

  if (!characterFound) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: Character not found!",
    };
  }

  const isUnequipped = await unequipCharacterArmor(id, slot);

  if (!isUnequipped) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: Armor Slot not found!",
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: "Deleted armor successfully!",
  };
}
