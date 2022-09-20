import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db";
import mongoose from "mongoose";

const port = process.env.port || 3100;


    const app = express();

    app.listen(port, () => {
        console.log(`Server Start on ${port}`);
      });

      connectDB()

      // ici on fait les routes

