import { motion } from "motion/react";
import { Pokemon } from "../models/pokemon";
import { Pokeball } from "./pokeball";

export function PokemonImageArea({
  pokemonState,
}: {
  pokemonState: Pokemon | null;
}) {
  return (
    <div className="w-72 h-72 flex items-center justify-center">
      {pokemonState ? (
        <motion.div
          initial={{
            scaleY: 0,
            scaleX: 0,
            opacity: 0,
            filter: "brightness(0) invert(1)",
          }} // White silhouette and scaled down
          animate={{
            scaleY: 1,
            scaleX: 1,
            opacity: 1,
            filter: "brightness(1) invert(0)",
          }}
          transition={{
            duration: 0.5,
            ease: "circOut",
          }}
        >
          <img src={pokemonState.imageUrl}></img>
        </motion.div>
      ) : (
        <Pokeball />
      )}
    </div>
  );
}
