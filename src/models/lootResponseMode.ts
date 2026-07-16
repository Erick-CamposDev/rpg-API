export interface LootResponseModel<T> {
  message: { text: string };
  data: T;
}
