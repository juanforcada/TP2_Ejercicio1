import express from "express";
import { config } from "./config/config.js";
const DISPLAY_MSG = `Serving at http://${config.HOST}:${config.PORT}`;
const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, msg: "TP Nº1 - TP2" });
});

app.listen(config.PORT, () => {
  console.log(DISPLAY_MSG);
});
