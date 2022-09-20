import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import homeRouter from "./routes/homeRouter"


const port = process.env.port || 3100;


    const app = express();

    app.listen(port, () => {
        console.log(`Server Start on ${port}`);
      });

      connectDB().then(init)

      async function init(){
        app.use('/', homeRouter)
    }

      
