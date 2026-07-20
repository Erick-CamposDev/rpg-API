import { ParamsDictionary } from "express-serve-static-core";

export default interface idParamModel extends ParamsDictionary {
  id: string;
  slot: string;
}
