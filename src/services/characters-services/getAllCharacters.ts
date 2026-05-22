import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getCharacters } from "../../repositories/characters-repository";

export default async function getAllCharactersService(): Promise<responseModel> {
  const repositoryData = await getCharacters();

  if (!repositoryData) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: NOT FOUND",
    };
  }

  if (repositoryData.length === 0) {
    return {
      statusCode: StatusCode.NO_CONTENT,
      body: "ERROR: NO CONTENT",
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: repositoryData,
  };
}
