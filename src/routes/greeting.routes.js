import express from "express";
import { greeting } from "../controllers/greeting.controller.js";

const router = express.Router();
router.get("", greeting);

export { router as greetingRoute };
