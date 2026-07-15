import { Router } from "express";
import {createShortURL, getURLInfo, deleteURL} from "../controllers/url.controller.js"

const router = Router();

// Create a new short URL
// POST /api/url
router.post("/", createShortURL);

// Get information about a shortened URL
// GET /api/url/:code
router.get("/:code", getURLInfo);

// Delete a shortened URL
// DELETE /api/url/:code
router.delete("/:code", deleteURL);

export default router;