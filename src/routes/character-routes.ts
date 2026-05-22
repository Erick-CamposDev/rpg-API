import Router from "express";
import { getAllCharacters } from "../controllers/characters-controller";

const characterRoute = Router();

characterRoute.get("/characters", getAllCharacters);

export default characterRoute;
