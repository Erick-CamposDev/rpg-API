import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getCharacterId } from "../../repositories/characters-repository";

export default async function getCharacterByIdService(
  id: string,
): Promise<responseModel> {
  const repositoryData = await getCharacterId(id);

  if (!repositoryData) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: CHARACTER NOT FOUND",
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: repositoryData,
  };
}
