import { Router } from "express";
import { getStudents, getStudentById, createStudent } from "../controllers/studentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

// GET /api/students
router.get("/", protect, getStudents);

// GET /api/students/:id
router.get("/:id", protect, getStudentById);

// POST /api/students
router.post("/", protect, createStudent);

export default router;
