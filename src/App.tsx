import { useState } from "react";
import "./App.css";
import { Pokeball } from "./components/pokeball";
import { motion } from "motion/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex size-full flex-col justify-evenly items-center">
        <h1 className="text-4xl"></h1>
        <motion.div
          animate={{
            rotate: [0, 45, 0, -45, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Pokeball />
        </motion.div>

        <button
          className="py-4 px-8 rounded-xl bg-red-500 text-xl text-white border-4 border-black"
          onClick={() => console.log("hello")}
        >
          Catch a Random Pokemon
        </button>
      </div>
    </>
  );
}

export default App;
