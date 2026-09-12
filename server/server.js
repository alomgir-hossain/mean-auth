import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import { connectDB } from "./config/mongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}));

app.get("/", (req, res) => {
    res.send("Api working")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})