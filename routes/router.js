import express from "express";
import { createPastrie, getPastries } from "../controllers/pastriesController.js";


const router = express.Router();

router.get("/", getPastries);
router.post('/add/pastries', createPastrie);
router.post('/dices', createPastrie)

export default router