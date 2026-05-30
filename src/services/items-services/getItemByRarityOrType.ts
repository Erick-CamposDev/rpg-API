import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { getItemRarityOrType } from "../../repositories/items-repository";

export default async function getItemByRarityOrTypeService(
  rarity?: string,
  type?: string,
): Promise<responseModel<typeof repositoryData | string>> {
  if (!rarity && !type) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "ERRO: Nenhuma raridade ou tipo de item foram definidos!",
    };
  }

  if (rarity && type === "Consumable".toLowerCase()) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "ERRO: Consumable não possui rarity!",
    };
  }

  const repositoryData = await getItemRarityOrType(rarity, type);

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
