import { updateItemId } from "../repositories/items-repository";
import { updateItems } from "../schemas/updateItemSchemas";

export default async function verifyInItemBody(
  property: string,
  body: updateItems,
  id: string,
) {
  if (property in body) {
    const propertyValue = body[property as keyof updateItems];

    if (propertyValue !== undefined) {
      await updateItemId(id, {
        [property]: propertyValue,
      });
    }
  }
}
