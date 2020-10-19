import * as React from "react"
import { Pokemon } from "./types"
import { useState, useEffect } from "react"
import PokemonListCard from "./PokemonListCard"

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/pokemons')
      .then(response => response.json())
      .then(response => setPokemons(response))
  }, []);

  return (
    <ul className="list-unstyled">
      {
        pokemons.map((pokemon, index) => <PokemonListCard pokemon={pokemon} />)
      }
    </ul>
  )
}

export default PokemonList
