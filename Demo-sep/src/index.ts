// src/server.ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import connectDB from "./utils/db/mongoose";
import AuthRoute from "./Routes/AuthRoutes";

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// CORS setup
const origins = process.env.origin?.split(",") || [];
const corsOptions: CorsOptions = {
  origin: origins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

// Routes
app.use("/auth", AuthRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
