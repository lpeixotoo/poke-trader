class Api::V1::TradesController < ApplicationController
  before_action :set_trade, only: [:show]

  # GET /trades
  # GET /trades.json
  def index
    @trades = Trade
      .only(:created_at, :is_fair, :ash_pokemons, :brock_pokemons)
    respond_to do |format|
      format.json { render json: @trades }
    end
  end

  # GET /trades/1
  # GET /trades/1.json
  def show
    respond_to do |format|
      format.json { render json: @trade }
    end
  end

  # POST /trades
  # POST /trades.json
  def create
    @trade = Trade.new(trade_params)

    respond_to do |format|
      if @trade.save
        format.json { render json: { status: "Trade Created" }, status: :created }
      else
        format.json { render json: @trade.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trade
      @trade = Trade.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def trade_params
      params.require(:trade).permit(:is_fair, :ash_pokemons, :brock_pokemons)
    end
end
