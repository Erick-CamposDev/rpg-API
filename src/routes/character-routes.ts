import Router from "express";
import {
  getAllCharacters,
  getCharacterById,
  deleteCharacterById,
  createNewCharacter,
} from "../controllers/characters-controller";
import validateCharacterBody from "../middlewares/validateCharacterBody";

const characterRoute = Router();

characterRoute.get("/characters", getAllCharacters);
characterRoute.get("/characters/:id", getCharacterById);

characterRoute.post("/characters", validateCharacterBody, createNewCharacter);

characterRoute.delete("/characters/:id", deleteCharacterById);

export default characterRoute;
