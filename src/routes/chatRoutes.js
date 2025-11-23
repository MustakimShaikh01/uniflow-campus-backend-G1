import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/chatController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

// GET /api/chat/messages
router.get("/messages", protect, getMessages);

// POST /api/chat/messages
router.post("/messages", protect, sendMessage);

export default router;
