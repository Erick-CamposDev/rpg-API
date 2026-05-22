import express, { json } from "express";
import characterRoute from "./routes/character-routes";
import invetoryRoute from "./routes/inventory-routes";
import itemRouter from "./routes/items-routes";

export default function createApp() {
  const app = express();
  app.use(json());

  app.use("/rpgAPI", characterRoute);
  app.use("/rpgAPI", invetoryRoute);
  app.use("/rpgAPI", itemRouter);

  return app;
}
