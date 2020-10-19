# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'poke-api-v2'

for i in 1..151
  pokemon = PokeApi.get(pokemon: i )
  puts pokemon.name
  hp = pokemon.stats.find do |stat_item|
     stat_item.stat.name == "hp"
  end
  defense = pokemon.stats.find do |stat_item|
     stat_item.stat.name == "defense"
  end
  attack = pokemon.stats.find do |stat_item|
     stat_item.stat.name == "attack"
  end
  Pokemon.create(
    name: pokemon.name,
    base_experience: pokemon.base_experience,
    height: pokemon.height,
    weight: pokemon.weight,
    sprite: pokemon.sprites.front_default,
    hp_stats: hp.base_stat,
    attack_stats: attack.base_stat,
    defense_stats: defense.base_stat,
  )
end
