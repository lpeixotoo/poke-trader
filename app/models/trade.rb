class Trade
  include Mongoid::Document
  include Mongoid::Timestamps
  field :created_date, type: Data
  field :is_fair, type: Mongoid::Boolean
  field :ash_pokemons, type: Object
  field :brock_pokemons, type: Object
end
