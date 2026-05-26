import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { createItem } from "../../repositories/items-repository";
import { items } from "../../schemas/itemSchema";

export default async function createNewItemService(
  body: items,
): Promise<responseModel> {
  if (Object.keys(body).length === 0) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "ERROR: DADOS INVÁLIDOS",
    };
  }

  await createItem(body);
  return {
    statusCode: StatusCode.CREATED,
    body: "Created new item successfully",
  };
}
