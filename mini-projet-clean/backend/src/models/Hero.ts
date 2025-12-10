// models/Hero.ts
import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
  name: String,
  publisher: String,
  alignment: String,
  image: String
});

export default mongoose.model("Hero", HeroSchema);
