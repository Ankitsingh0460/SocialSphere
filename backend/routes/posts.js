import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getFeedPost, getUserPost, likePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", verifyToken, getFeedPost);
router.get("/:userId/posts", verifyToken, getUserPost);

router.patch("/:id/like", verifyToken, likePost);

export default router;
