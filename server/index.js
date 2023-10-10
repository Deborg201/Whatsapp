import express from "express"
const app = express();
import AuthRoutes from "../server/routes/AuthRoutes.js"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/auth",AuthRoutes)
const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
})