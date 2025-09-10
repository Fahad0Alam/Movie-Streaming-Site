//step 1 
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import router from "./route/userRouter.js";
import cors from "cors";

databaseConnection();

dotenv.config({
    path: '.env'
})

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions));


//api
app.use("/api/v1/user", router);

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT || 7000}`);
});


import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../netflix/public/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../netflix/public/buildindex.html'));
    });
}