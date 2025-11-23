import { Router } from "express";
import { getPlacements } from "../controllers/placementController.js";
import { protect, requireRole } from "../middleware/authMiddleware.js";

const router = Router();

// GET /api/placements
router.get("/", protect, requireRole(["admin", "placement"]), getPlacements);

export default router;
