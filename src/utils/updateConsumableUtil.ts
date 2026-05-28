import { updateItems } from "../schemas/updateItemSchemas";
import verifyInItemBody from "./verifyInBodyUtil";

export default async function updateConsumable(
  body: updateItems,
  id: string,
  type: string,
) {
  switch (type) {
    case "strength":
      verifyInItemBody("strengthToIncrease", body, id);
      break;
    case "defense":
      verifyInItemBody("defenseToIncrease", body, id);
      break;
    case "life":
      verifyInItemBody("healthToRestore", body, id);
      break;
    case "mana":
      verifyInItemBody("manaToRestore", body, id);
      break;
  }
}
