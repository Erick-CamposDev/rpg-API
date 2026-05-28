import { updateItemId } from "../repositories/items-repository";

export default async function verifyInItemBody<T extends object>(
  property: string,
  body: T,
  id: string,
) {
  if (property in body) {
    const propertyValue = (body as any)[property];

    if (propertyValue !== undefined) {
      await updateItemId(id, {
        [property]: propertyValue,
      });
    }
  }
}
