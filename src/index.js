import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import {
    greetingRoute,
  } from "./routes/greeting.routes.js";

const PORT = process.env.PORT
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/hello", greetingRoute);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
