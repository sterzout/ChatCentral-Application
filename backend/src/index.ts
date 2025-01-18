import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();


const app = express()

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const portNumber = 5001;

app.listen(portNumber, () => {
    console.log(`Server is running on ${portNumber}`);
});
