import Router from "express";
import {
  getAllCharacters,
  getCharacterById,
} from "../controllers/characters-controller";

const characterRoute = Router();

characterRoute.get("/characters", getAllCharacters);
characterRoute.get("/characters/:id", getCharacterById);

export default characterRoute;
