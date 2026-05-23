import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";

export default async function getItemByRarityOrTypeService(
  rarity?: string,
  type?: string,
): Promise<responseModel> {
  if (!rarity && !type) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "placeholder",
    };
  }
}
