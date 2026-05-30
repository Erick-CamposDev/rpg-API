import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { deleteItemId } from "../../repositories/items-repository";

export default async function deleteItemByIdService(
  id: string,
): Promise<responseModel<string>> {
  const isDeleted = await deleteItemId(id);

  if (!isDeleted) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: ITEM NOT FOUND",
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: "Deleted Sucessfully",
  };
}
