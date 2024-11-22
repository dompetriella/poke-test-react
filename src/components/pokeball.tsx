import { motion } from "motion/react";

export function Pokeball() {
  return (
    <motion.div
      animate={{
        x: [0, 16, 0, -16, 0],
        rotate: [0, 30, 0, -30, 0],
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        times: [0.2, 0.5, 0.8],
        repeat: Infinity,
      }}
    >
      <div className="relative w-16 h-16 rounded-full border-4 border-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
      </div>
    </motion.div>
  );
}
