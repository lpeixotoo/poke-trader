class Trade
  include Mongoid::Document
  include Mongoid::Timestamps
  field :is_fair, type: Mongoid::Boolean
  field :ash_pokemons, type: String
  field :brock_pokemons, type: String
end
