import express, { json } from "express";
import characterRoute from "./routes/character-routes";
import inventoryRoute from "./routes/inventory-routes";
import itemRouter from "./routes/items-routes";
import lootRouter from "./routes/loot-route";

export default function createApp() {
  const app = express();
  app.use(json());

  app.use("/rpgAPI", characterRoute);
  app.use("/rpgAPI", inventoryRoute);
  app.use("/rpgAPI", itemRouter);
  app.use("/rpgAPI", lootRouter);

  return app;
}
