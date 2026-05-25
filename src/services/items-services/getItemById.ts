import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getItemId } from "../../repositories/items-repository";

export default async function getItemByIdService(
  id: string,
): Promise<responseModel> {
  const repositoryData = await getItemId(id);

  if (!repositoryData) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: ITEM NOT FOUND!",
    };
  }

  return {
    statusCode: StatusCode.OK,
    body: repositoryData,
  };
}
