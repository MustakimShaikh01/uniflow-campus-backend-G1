import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Core middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check
app.get("/", (req, res) => {
  res.json({
    app: process.env.APP_NAME || "UniFlow Campus Backend",
    status: "ok",
    message: "Backend is up and running 🚀"
  });
});

// API routes
app.use("/api", apiRouter);

// 404 + error handler
app.use(notFound);
app.use(errorHandler);

export default app;
