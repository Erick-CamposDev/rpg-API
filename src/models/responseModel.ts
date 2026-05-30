import { StatusCode } from "../enums/status-codes";

export interface responseModel<T> {
  statusCode: StatusCode;
  message?: string;
  body: T;
}
