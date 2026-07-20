import Router from "express";
import {
  getAllCharacters,
  getCharacterById,
  deleteCharacterById,
  createNewCharacter,
  updateCharacterById,
} from "../controllers/characters-controller";
import validateUpdateCharacterBody from "../middlewares/validateUpdateCharacterBody";
import idParamModel from "../models/paramsModel";
import { characterSchema } from "../schemas/characterSchema";
import { updatedSchemas } from "../schemas/updateCharacterSchemas";
import validateBodySchema from "../middlewares/validateBody";

const characterRoute = Router();

characterRoute.get("/characters", getAllCharacters);
characterRoute.get("/characters/:id", getCharacterById);

characterRoute.post(
  "/characters",
  validateBodySchema(characterSchema),
  createNewCharacter,
);

characterRoute.delete("/characters/:id", deleteCharacterById);
characterRoute.patch(
  "/characters/:id",
  validateBodySchema(updatedSchemas),
  updateCharacterById,
);

export default characterRoute;
