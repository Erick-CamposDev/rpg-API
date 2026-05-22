import { StatusCode } from "../enums/status-codes";
import { items } from "../schemas/itemSchema";
import { Character } from "../schemas/characterSchema";

export interface responseModel {
  statusCode: StatusCode;
  body: items | Character | Character[] | items[] | string;
}
