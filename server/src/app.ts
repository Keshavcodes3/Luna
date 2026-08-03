import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan"
import ApiError from "./utils/api.error.js";

const app = express();

// Security
app.use(helmet());

// CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

// Body Parsers
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Compression
app.use(compression());

// Logger
app.use(morgan("dev"));

// Health Check
app.get("/health", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running 🚀",
    });
});


import authRouter from "./routes/auth.routes.js";

// API Routes
app.use("/api/v1/auth", authRouter);

// 404 Handler
app.use((_req, _res, next) => {
    next(new ApiError(404, "Route not found"));
});



export default app;