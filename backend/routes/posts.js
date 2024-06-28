import express from "express";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.get("/", verifyToken, getFeedPost);
router.get("/:userId/posts", verifyToken, getUserPost);

router.patch("/:id/like", verifyToken, likePost);

export default router;
