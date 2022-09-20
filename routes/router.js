import express from "express";

const router = express.Router();

router.get("/", homeController);

export default router