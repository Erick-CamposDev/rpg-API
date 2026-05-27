import Router from "express";
import {
  getAllCharacters,
  getCharacterById,
  deleteCharacterById,
  createNewCharacter,
  updateCharacterById,
} from "../controllers/characters-controller";
import validateCharacterBody from "../middlewares/validateCharacterBody";
import validateUpdateCharacterBody from "../middlewares/validateUpdateCharacterBody";
import idParamModel from "../models/paramsModel";

const characterRoute = Router();

characterRoute.get("/characters", getAllCharacters);
characterRoute.get("/characters/:id", getCharacterById);

characterRoute.post("/characters", validateCharacterBody, createNewCharacter);

characterRoute.delete("/characters/:id", deleteCharacterById);

characterRoute.patch<idParamModel>(
  "/characters/:id",
  validateUpdateCharacterBody,
  updateCharacterById,
);

export default characterRoute;
