import express from "express";
import authRoutes from "./routes/authRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import "dotenv/config";
import cors from "cors";



const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/heroes", heroRoutes);

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
