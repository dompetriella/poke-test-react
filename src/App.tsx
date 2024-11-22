import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Pokemon } from "./models/pokemon";
import { PokemonImageArea } from "./components/pokemonImageArea";
import { getRandomNumber, wait } from "./logic";

function App() {
  const [pokemonState, setPokemonState] = useState<Pokemon | null>(null);

   async function getRandomPokemon()  {
    setPokemonState(null);
    const pokemonId: number = getRandomNumber(1, 250);
    const url: string = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const paddedId = pokemonId.toString().padStart(3, "0");
    const pokemonImageUrl: string = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${paddedId}.png`;

    try {
      const response = await axios.get(url);
      const newPokemon: Pokemon = new Pokemon(pokemonId, paddedId, pokemonImageUrl, response.data['name']);
      console.log(newPokemon);
      await wait(2400); 
      setPokemonState(newPokemon);

  } catch (error: any) {
      console.error(error.message);
  }
  }

  return (
    <>
      <div className="flex size-full flex-col justify-evenly items-center bg-gradient-to-t from-red-800 to-white">
          <h1 className={`text-4xl ${pokemonState ? "text-black" : "text-transparent"} `}>{pokemonState ? `#${pokemonState.paddedId} - ${pokemonState.name.toUpperCase()}`: "No Pokemon"}</h1>
<PokemonImageArea pokemonState={pokemonState} />
        <button
          className="py-4 px-8 rounded-xl bg-red-500 text-xl text-white border-4 border-black"
          onClick={() => getRandomPokemon()}
        >
          Release New Pokemon
        </button>
      </div>
    </>
  );
}

export default App;
