import express from "express";
import { createPastrie, getPastries } from "../controllers/homeController.js";


const router = express.Router();

router.get("/", getPastries);
router.post('/add/pastries', createPastrie)

export default router