import * as React from "react"
import { Pokemon } from "./types"
import { useState, useEffect } from "react"
import { IoIosAddCircleOutline } from "react-icons/io"
import { Api, POKEMON_ENDPOINT } from "./Api"

export type Props = {
  addAshHandlerBuilder: (
    pokemon: Pokemon,
  ) => (event: React.MouseEvent<HTMLAnchorElement>) => void
  addBrockHandlerBuilder: (
    pokemon: Pokemon,
  ) => (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const PokemonList: React.FC<Props> = ({
  addAshHandlerBuilder,
  addBrockHandlerBuilder,
}: Props) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    Api.get(POKEMON_ENDPOINT).then((response) => setPokemons(response.data))
  }, [])

  return (
    <ul className="list-unstyled">
      {pokemons.map((pokemon, index) => {
        return (
          <li key={index} className="media">
            <img className="align-self-center mr-3" src={pokemon.sprite} />
            <div className="media-body">
              <h5 className="mt-0 mb-1">{pokemon.name}</h5>
              <p>Base Experience: {pokemon.base_experience}</p>
              <p>HP: {pokemon.hp_stats}</p>
              <a onClick={addAshHandlerBuilder(pokemon)}>
                <IoIosAddCircleOutline />
              </a>
              <a onClick={addBrockHandlerBuilder(pokemon)}>
                <IoIosAddCircleOutline />
              </a>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default PokemonList
