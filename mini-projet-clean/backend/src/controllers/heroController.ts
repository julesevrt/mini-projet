import { Request, Response } from "express";
import Hero from "../models/Hero.js";

// GET tous les héros
export const getHeroes = async (req: Request, res: Response) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// GET un héros par ID
export const getHeroById = async (req: Request, res: Response) => {
  try {
    const hero = await Hero.findById(req.params.id);
    if (!hero) {
      return res.status(404).json({ message: "Héros introuvable" });
    }
    res.json(hero);
  } catch (error) {
    res.status(400).json({ message: "ID invalide" });
  }
};

// POST créer un héros
export const createHero = async (req: Request, res: Response) => {
  try {
    const hero = await Hero.create(req.body);
    res.status(201).json(hero);
  } catch (error) {
    res.status(400).json({ message: "Données invalides" });
  }
};

// PUT modifier un héros
export const updateHero = async (req: Request, res: Response) => {
  try {
    const hero = await Hero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!hero) {
      return res.status(404).json({ message: "Héros introuvable" });
    }

    res.json(hero);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la modification" });
  }
};

// DELETE supprimer un héros
export const deleteHero = async (req: Request, res: Response) => {
  try {
    const hero = await Hero.findByIdAndDelete(req.params.id);

    if (!hero) {
      return res.status(404).json({ message: "Héros introuvable" });
    }

    res.json({ message: "Héros supprimé avec succès" });
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la suppression" });
  }
};
