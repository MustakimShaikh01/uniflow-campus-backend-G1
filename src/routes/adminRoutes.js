import { Router } from "express";
import { getDashboardStats } from "../controllers/adminController.js";
import { protect, requireRole } from "../middleware/authMiddleware.js";

const router = Router();

// GET /api/admin/dashboard
router.get("/dashboard", protect, requireRole(["admin"]), getDashboardStats);

export default router;
