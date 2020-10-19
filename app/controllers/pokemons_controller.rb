class PokemonsController < ApplicationController
  before_action :set_pokemon, only: [:show]

  # GET /pokemons
  # GET /pokemons.json
  def index
    @pokemons = Pokemon
      .limit(filter_params[:limit] ? filter_params[:limit] : nil)
      .offset(filter_params[:offset] ? filter_params[:offset] : nil)
    respond_to do |format|
      format.json { render json: @pokemons }
    end
  end

  # GET /pokemons/1
  # GET /pokemons/1.json
  def show
    respond_to do |format|
      format.json { render json: @pokemon }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pokemon
      @pokemon = Pokemon.find(params[:id])
    end

    def filter_params
      params.permit(:limit, :offset)
    end

    # Only allow a list of trusted parameters through.
    def pokemon_params
      params.require(:pokemon).permit(:name, :base_experience, :height, :weight, :sprite, :hp_stats, :attack_stats, :defense_stats)
    end
end
