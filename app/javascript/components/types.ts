export type MongoOid = {
  $oid: String
}

export type Pokemon = {
  _id: MongoOid
  name: string
  base_experience: number
  height: number
  weight: number
  sprite: string
  hp_stats: number
  attack_stats: number
  defense_stats: number
}

export type Trade = {
  _id: MongoOid
  created_at: string
  is_fair: boolean
  //TODO: Add Pokemon type for detailing
  ash_pokemons: string
  brock_pokemons: string
}
