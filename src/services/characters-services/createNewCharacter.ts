import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import { addNewPlayer } from "../../repositories/characters-repository";
import { Character } from "../../schemas/characterSchema";

export default async function createNewCharacterService(
  body: Character,
): Promise<responseModel> {
  if (Object.keys(body).length === 0) {
    return {
      statusCode: StatusCode.BAD_REQUEST,
      body: "ERROR: Dados inválidos",
    };
  }

  await addNewPlayer(body);

  return {
    statusCode: StatusCode.CREATED,
    body: "Created new character succesfully!",
  };
}
