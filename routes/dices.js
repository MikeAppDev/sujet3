import express from "express";
import { getDices } from "../controllers/dicesController.js";


const router = express.Router();

router.get('/dices', getDices)

export default router