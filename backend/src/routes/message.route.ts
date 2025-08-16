import express from "express";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
router.post("/send/:id", protectRoute, sendMessage);
router.get("/conversations", protectRoute, getUsersForSidebar);
router.get("/conversation/:id", protectRoute, getMessages);


export default router;