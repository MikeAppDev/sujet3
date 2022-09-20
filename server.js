import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import homeRouter from "./routes/router.js"


const port = process.env.port || 3100;


    const app = express();

      connectDB()
        .then(init)

      async function init(){
        app.use('/', homeRouter)
    }


      // end
    app.listen(port, () => {
      console.log(`Server Start on ${port}`);
    });