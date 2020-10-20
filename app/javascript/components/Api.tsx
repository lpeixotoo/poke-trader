import axios from "axios"
import $ from "jquery"

export const POKEMON_ENDPOINT = "/pokemons"
export const TRADES_ENDPOINT = "/trades"

export const Api = axios.create({
  baseURL: `http://localhost:3000/api/v1`,
  headers: {
    "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
  },
})
