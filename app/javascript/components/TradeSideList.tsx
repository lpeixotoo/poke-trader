import * as React from "react"
import { Pokemon } from "./types"
import { useState, useEffect } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io"

type Props = {
  pokemons?: Pokemon[]
  totalBaseExperience: number
  removePokemonHandlerBuilder: (
    pokemonIndex: number,
  ) => (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const TradeSideList: React.FC<Props> = ({
  pokemons,
  totalBaseExperience,
  removePokemonHandlerBuilder,
}) => {
  return (
    <>
      <h2>Side Base Experience: {totalBaseExperience}</h2>
      <ul className="list-unstyled">
        {pokemons.map((pokemon, index) => {
          return (
            <li key={index} className="media">
              <img className="align-self-center mr-3" src={pokemon.sprite} />
              <div className="media-body">
                <h5 className="mt-0 mb-1">{pokemon.name}</h5>
                <p>Base Experience: {pokemon.base_experience}</p>
                <p>HP: {pokemon.hp_stats}</p>
                <a onClick={removePokemonHandlerBuilder(index)}>
                  <IoIosCloseCircleOutline />
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TradeSideList
