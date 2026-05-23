import Router from "express";
import {
  getAllCharacters,
  getCharacterById,
  deleteCharacterById,
} from "../controllers/characters-controller";

const characterRoute = Router();

characterRoute.get("/characters", getAllCharacters);
characterRoute.get("/characters/:id", getCharacterById);

characterRoute.delete("/characters/:id", deleteCharacterById);

export default characterRoute;
