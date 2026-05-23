import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getItems } from "../../repositories/items-repository";

export default async function getAllItemsService(): Promise<responseModel> {
  const repositoryData = await getItems();

  if (!repositoryData) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: NOT FOUND",
    };
  }

  if (repositoryData.length === 0) {
    return {
      statusCode: StatusCode.NO_CONTENT,
      body: "NO CONTENT",
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: repositoryData,
  };
}
