import { updateItems } from "../schemas/updateItemSchemas";
import verifyInItemBody from "./verifyInBodyUtil";

export default async function updateWeapon(
  body: updateItems,
  id: string,
  rarity: string,
) {
  await verifyInItemBody("damage", body, id);

  if (rarity === "Epic" || rarity === "Mythic") {
    await verifyInItemBody("bonus", body, id);
  }

  if (rarity === "Legendary") {
    await verifyInItemBody("bonus", body, id);
    await verifyInItemBody("specialAttack", body, id);
  }
}
