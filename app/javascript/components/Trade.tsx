import * as React from "react"
import { Pokemon } from "./types"
import { useState, useEffect } from "react"
import PokemonList from "./PokemonList"
import TradeSideList from "./TradeSideList"
import { Api, TRADES_ENDPOINT } from "./Api"
import Toast from "react-bootstrap/Toast"

type ToastState = {
  isShow: boolean
  message: string
}

const Trade: React.FC = () => {
  const [sideAshPokemons, setSideAshPokemons] = useState<Pokemon[]>([])
  const [sideBrockPokemons, setSideBrockPokemons] = useState<Pokemon[]>([])
  // Toast states
  const [showToast, setShowToast] = useState<ToastState>({
    isShow: false,
    message: "",
  })

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

  const handleSubmit = (event) => {
    event.preventDefault()

    if (sideAshPokemons.length === 0 || sideBrockPokemons.length === 0) {
      setShowToast({
        isShow: true,
        message: "Error: Insert Pokemons on empty side",
      })
      return
    }

    const postData = {
      is_fair: baseExperienceDifference < 40,
      //TODO: Change model for proper handling pokemon field. Maybe ObjectOid?
      ash_pokemons: sideAshPokemons.map((pokemon) => pokemon.name).join(","),
      brock_pokemons: sideBrockPokemons
        .map((pokemon) => pokemon.name)
        .join(","),
    }

    Api.post(TRADES_ENDPOINT, { trade: postData }).then((response) => {
      if (response.status === 201) {
        setSideAshPokemons([])
        setSideBrockPokemons([])
        setShowToast({ isShow: true, message: "Trade Completed" })
      } else {
        setShowToast({
          isShow: true,
          message: "Error when registring trade",
        })
      }
    })
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
      <Toast
        onClose={() =>
          setShowToast((prevState) => ({ ...prevState, isShow: false }))
        }
        show={showToast.isShow}
        delay={5000}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">PokeTrade</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{showToast.message}</Toast.Body>
      </Toast>
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
            <div className="row">
              <button onClick={handleSubmit}>Trade Pokemons</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trade
