import { useEffect, useState } from "react";
import api from "../services/api";

type Hero = {
  _id: string;
  nom: string;
};

export default function HeroList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/heroes")
      .then(res => setHeroes(res.data))
      .catch(() => setError("Impossible de charger les héros"));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Hero List</h1>
      <ul>
        {heroes.map(h => (
          <li key={h._id}>{h.nom}</li>
        ))}
      </ul>
    </div>
  );
}
