import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import databaseConnection from "./utils/database.js";
import router from "./route/userRouter.js";

// Setup __dirname in ES modules
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

// Load env
dotenv.config({ path: ".env" });

// Connect DB
databaseConnection();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS setup
const corsOptions = {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
};
app.use(cors(corsOptions));

// API routes
app.use("/api/v1/user", router);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
    const frontendPath = path.join(__dirname, "../netflix/build");
    app.use(express.static(frontendPath));

    app.get("*", (req, res) => {
        res.sendFile(path.join(frontendPath, "index.html"));
    });
}

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});