import express, { json } from "express";
import characterRoute from "./routes/character-routes";
import invetoryRoute from "./routes/inventory-routes";
import itemRouter from "./routes/items-routes";

export default function createApp() {
  const app = express();
  app.use(json());

  app.use("/character", characterRoute);
  app.use("/invetory", invetoryRoute);
  app.use("/items", itemRouter);

  return app;
}
