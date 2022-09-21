import express from "express";
import { getDices } from "../controllers/dicesController.js";


const router = express.Router();

router.post('/dices', getDices)

export default router