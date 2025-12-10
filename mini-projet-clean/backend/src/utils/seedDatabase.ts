import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Hero from "../models/Hero.js";

dotenv.config();

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const filePath = path.join(
        process.cwd(),
        "src",
        "uploads",
        "SuperHerosComplet.json"
);

    const rawData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(rawData);

    await Hero.deleteMany();

    const heroes = data.superheros.map((h: any) => ({
      nom: h.name,
      alias: h.biography?.fullName || "",
      univers: h.biography?.publisher || "Autre",
      pouvoirs: Object.keys(h.powerstats || {}),
      description: h.biography?.firstAppearance || "",
    }));

    await Hero.insertMany(heroes);

    console.log("✅ Héros importés avec succès dans MongoDB");
    process.exit(0);
  } catch (error) {
    console.error("❌ ERREUR IMPORT :", error);
    process.exit(1);
  }
};

importData();
