import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./controllers/coder.controller.js";

const app = express();

app.use(cors());
app.use(express.json());


dotenv.config();
const source = process.env.mongo_url;

mongoose.connect(source);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("DB connected");
});

const PORT = process.env.port || 5000;
app.listen(PORT, ()=>{
    console.log('Successfully served on port : '+PORT+'.');
});
app.use('/coders', router)