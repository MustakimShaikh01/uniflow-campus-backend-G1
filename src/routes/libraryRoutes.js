import { Router } from "express";
import { getBooks } from "../controllers/libraryController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

// GET /api/library/books
router.get("/books", protect, getBooks);

export default router;
