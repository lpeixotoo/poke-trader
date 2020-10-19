import * as React from "react"
import { Pokemon } from "./types"

type Props = {
  pokemon: Pokemon
}

const PokemonListCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <li className="media">
      <img className="mr-3" src={pokemon.sprite} />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{pokemon.name}</h5>
      </div>
    </li>
  )
}

export default PokemonListCard
