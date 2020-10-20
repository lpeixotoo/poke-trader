import * as React from "react"
import { Pokemon, Trade } from "./types"
import { useState, useEffect } from "react"
import { Api, TRADES_ENDPOINT } from "./Api"

const TradeHistory: React.FC = () => {
  const [trades, setTrades] = useState<Trade[]>([])

  useEffect(() => {
    Api.get(TRADES_ENDPOINT).then((response) => setTrades(response.data))
  }, [])

  return (
    <>
      <div className="text-center">
        <h4> Trade History </h4>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Is Fair</th>
            <th scope="col">Ash Pokemons</th>
            <th scope="col">Brock Pokemons</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => {
            return (
              <tr>
                <th scope="row">{trade._id.$oid}</th>
                <td>{trade.is_fair.toString()}</td>
                <td>{trade.ash_pokemons}</td>
                <td>{trade.brock_pokemons}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default TradeHistory
