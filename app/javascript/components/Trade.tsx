import * as React from "react"
import { Pokemon } from "./types"
import { useState, useEffect } from "react"
import PokemonList from "./PokemonList"
import TradeSideList from "./TradeSideList"

const Trade: React.FC = () => {
  const [sideAshPokemons, setSideAshPokemons] = useState<Pokemon[]>([])
  const [sideBrockPokemons, setSideBrockPokemons] = useState<Pokemon[]>([])

  // add pokemons to side handlers
  const addSideAshHandlerBuilder = (newPokemon: Pokemon) => {
    return () =>
      setSideAshPokemons((prevPokemons) =>
        //TODO: Set maximum as config variable
        prevPokemons.length === 6
          ? [...prevPokemons]
          : [...prevPokemons, newPokemon],
      )
  }
  const addSideBrockHandlerBuilder = (newPokemon: Pokemon) => {
    return () =>
      setSideBrockPokemons((prevPokemons) =>
        prevPokemons.length === 6
          ? [...prevPokemons]
          : [...prevPokemons, newPokemon],
      )
  }

  //remove pokemons from side handlers
  const removeSideAshHandlerBuilder = (targetPokemonIndex: number) => {
    return () =>
      setSideAshPokemons((prevPokemons) =>
        prevPokemons.filter((_, index) => index !== targetPokemonIndex),
      )
  }
  const removeSideBrockHandlerBuilder = (targetPokemonIndex: number) => {
    return () =>
      setSideBrockPokemons((prevPokemons) =>
        prevPokemons.filter((_, index) => index !== targetPokemonIndex),
      )
  }

  // base experience calculations variables
  const totalBaseExperienceAsh = sideAshPokemons.reduce(
    (acc, pokemon) => acc + pokemon.base_experience,
    0,
  )
  const totalBaseExperienceBrock = sideBrockPokemons.reduce(
    (acc, pokemon) => acc + pokemon.base_experience,
    0,
  )
  const baseExperienceDifference = Math.abs(
    totalBaseExperienceAsh - totalBaseExperienceBrock,
  )

  //TODO: Set acceptable difference as config variable
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <PokemonList
            addAshHandlerBuilder={addSideAshHandlerBuilder}
            addBrockHandlerBuilder={addSideBrockHandlerBuilder}
          />
        </div>
        <div className="col-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                {baseExperienceDifference > 40 ? "Not Fair" : "Fair"}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1>Side Ash</h1>
                <TradeSideList
                  pokemons={sideAshPokemons}
                  totalBaseExperience={totalBaseExperienceAsh}
                  removePokemonHandlerBuilder={removeSideAshHandlerBuilder}
                />
              </div>
              <div className="col">
                <h1>Side Brock</h1>
                <TradeSideList
                  pokemons={sideBrockPokemons}
                  totalBaseExperience={totalBaseExperienceBrock}
                  removePokemonHandlerBuilder={removeSideBrockHandlerBuilder}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trade
