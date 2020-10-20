import * as React from "react"
import { Pokemon } from "./types"
import { useState, useEffect } from "react"
import PokemonListCard from "./PokemonListCard"

type Props = {
  pokemons?: Pokemon[]
}

const TradeSideList: React.FC<Props> = ({ pokemons }) => {
  return (
    <>
      <h2>
        Side Base Experience: {
          pokemons.reduce((acc, pokemon) => acc + pokemon.base_experience,0)
        }
      </h2>
      <ul className="list-unstyled">
        {
          pokemons.map((pokemon, index) => <PokemonListCard pokemon={pokemon} />)
        }
      </ul>
    </>
  )
}

export default TradeSideList
