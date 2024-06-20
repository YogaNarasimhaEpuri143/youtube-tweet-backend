import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGN,
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Nested Objects are allowed.
app.use(express.static("public"));
app.use(cookieParser());

// router imports
import userRouter from "./routes/user.routes.js";

// router declarations
app.use("/api/v1/users", userRouter);

export { app };

// Contain Configuration of the express app
