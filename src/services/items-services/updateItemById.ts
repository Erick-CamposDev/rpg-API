import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getItemId, updateItemId } from "../../repositories/items-repository";
import {
  updateArmorSchema,
  updateItems,
} from "../../schemas/updateItemSchemas";
import updateArmor from "../../utils/updateArmor.Util";
import updateConsumable from "../../utils/updateConsumableUtil";
import updateWeapon from "../../utils/updateWeaponUtil";
import verifyInItemBody from "../../utils/verifyInBodyUtil";

export default async function updateItemByIdService(
  id: string,
  body: updateItems,
): Promise<responseModel<string>> {
  const repositoryData = await getItemId(id);

  if (!repositoryData) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERRO: ITEM NOT FOUND!",
    };
  }

  await verifyInItemBody("name", body, id);
  await verifyInItemBody("weight", body, id);

  if (repositoryData.itemType === "Weapon") {
    await updateWeapon(body, id, repositoryData.rarity);
  } else if (repositoryData.itemType === "Armor") {
    await updateArmor(body, id, repositoryData.rarity);
  } else if (repositoryData.itemType === "Consumable") {
    await updateConsumable(body, id, repositoryData.type);
  }

  return {
    statusCode: StatusCode.OK,
    body: "Item updated successfully!",
  };
}
