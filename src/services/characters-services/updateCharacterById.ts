import { StatusCode } from "../../enums/status-codes";
import { responseModel } from "../../models/responseModel";
import {
  getCharacterId,
  updateCharacter,
} from "../../repositories/characters-repository";
import { UpdatedCharacter } from "../../schemas/updateCharacterSchemas";

export default async function updateCharacterByIdService(
  id: string,
  body: UpdatedCharacter,
): Promise<responseModel<string>> {
  const foundCharacter = await getCharacterId(id);

  if (!foundCharacter) {
    return {
      statusCode: StatusCode.NOT_FOUND,
      body: "ERROR: CHARACTER NOT FOUND!",
    };
  }

  if ("baseManaPoints" in body) {
    if (body.baseManaPoints !== undefined) {
      await updateCharacter(id, {
        baseManaPoints: body.baseManaPoints,
      });
    }
  }

  if (body.name !== undefined) {
    await updateCharacter(id, {
      name: body.name,
    });
  }

  if (body.baseAttackDamage !== undefined) {
    await updateCharacter(id, {
      baseAttackDamage: body.baseAttackDamage,
    });
  }

  if (body.baseHealthPoints !== undefined) {
    await updateCharacter(id, {
      baseHealthPoints: body.baseHealthPoints,
    });
  }

  if (body.baseDefense !== undefined) {
    await updateCharacter(id, {
      baseDefense: body.baseDefense,
    });
  }

  if (body.level !== undefined) {
    await updateCharacter(id, {
      level: body.level,
    });
  }

  if (body.maxWeight !== undefined) {
    await updateCharacter(id, {
      maxWeight: body.maxWeight,
    });
  }

  return {
    statusCode: StatusCode.OK,
    body: "Updated character successfully!",
  };
}
