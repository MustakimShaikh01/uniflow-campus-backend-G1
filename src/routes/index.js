import { Router } from "express";
import authRoutes from "./authRoutes.js";
import studentRoutes from "./studentRoutes.js";
import attendanceRoutes from "./attendanceRoutes.js";
import facultyRoutes from "./facultyRoutes.js";
import examRoutes from "./examRoutes.js";
import libraryRoutes from "./libraryRoutes.js";
import placementRoutes from "./placementRoutes.js";
import adminRoutes from "./adminRoutes.js";
import chatRoutes from "./chatRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/students", studentRoutes);
router.use("/attendance", attendanceRoutes);
router.use("/faculty", facultyRoutes);
router.use("/exams", examRoutes);
router.use("/library", libraryRoutes);
router.use("/placements", placementRoutes);
router.use("/admin", adminRoutes);
router.use("/chat", chatRoutes);

export default router;
