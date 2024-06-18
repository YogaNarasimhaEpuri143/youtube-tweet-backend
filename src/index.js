import dotenv from "dotenv";
import express from "express";

import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
const app = express();

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("App is listening on PORT: ", PORT));
