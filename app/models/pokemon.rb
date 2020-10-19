class Pokemon
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  field :base_experience, type: Integer
  field :height, type: Integer
  field :weight, type: Integer
  field :sprite, type: String
  field :hp_stats, type: Integer
  field :attack_stats, type: Integer
  field :defense_stats, type: Integer
end
