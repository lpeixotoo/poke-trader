import * as React from "react"
import { Pokemon } from "./types"
import { useState, useEffect } from "react"
import PokemonList from "./PokemonList"

const Trade: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <PokemonList />
        </div>
        <div className="col-5">
          2 of 3
        </div>
        <div className="col-5">
          3 of 3
        </div>
      </div>
    </div>
  )
}

export default Trade
