import express from "express";
import { config } from "./config/config.js";
import { studentRouter } from "./routes/student.router.js";
import morgan from "morgan";
const DISPLAY_MSG = `Serving at http://${config.HOST}:${config.PORT}`;

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use("/students", studentRouter);

app.get("/", (req, res) => {
  res.json({ status: 200, msg: "TP Nº1 - TP2" });
});

app.listen(config.PORT, () => {
  console.log(DISPLAY_MSG);
});
