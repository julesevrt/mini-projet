import { Router } from "express";
import {
  getHeroes,
  getHeroById,
  createHero,
  updateHero,
  deleteHero
} from "../controllers/heroController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, getHeroes);
router.get("/:id", authMiddleware, getHeroById);
router.post("/", authMiddleware, createHero);
router.put("/:id", authMiddleware, updateHero);
router.delete("/:id", authMiddleware, deleteHero);

export default router;



