import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { deleteCharacterId } from "../../repositories/characters-repository";

export default async function deleteCharacterByIdService(
  id: string,
): Promise<responseModel> {
  const isDeleted = await deleteCharacterId(id);

  if (!isDeleted) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: CHARACTER NOT FOUND",
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: "Deleted sucessfully!",
  };
}
