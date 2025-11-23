import { Router } from "express";
import { getExams } from "../controllers/examController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

// GET /api/exams
router.get("/", protect, getExams);

export default router;
