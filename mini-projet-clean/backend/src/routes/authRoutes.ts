import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

// FAKE DB
const users = [{ username: "jules", password: "1234" }];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Identifiants invalides" });
  }

  const token = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;
