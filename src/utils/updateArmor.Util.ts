import { updateItems } from "../schemas/updateItemSchemas";
import verifyInItemBody from "./verifyInBodyUtil";

export default async function updateArmor(
  body: updateItems,
  id: string,
  rarity: string,
) {
  await verifyInItemBody("defense", body, id);
  await verifyInItemBody("armorType", body, id);

  if (rarity === "Epic" || rarity === "Mythic" || rarity === "Legendary") {
    await verifyInItemBody("bonus", body, id);
  }
}
