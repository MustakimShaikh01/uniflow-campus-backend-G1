import { Router } from "express";
import { getFaculty } from "../controllers/facultyController.js";
import { protect, requireRole } from "../middleware/authMiddleware.js";

const router = Router();

// GET /api/faculty
router.get("/", protect, requireRole(["admin", "faculty"]), getFaculty);

export default router;
