# Poke Trade

## Overview

Poke Trader is a demo application intended to analyze pokemons trade based
on its `base experience` info gathered from [PokeAPI](https://github.com/PokeAPI/pokeapi). It leverages 
Ruby on Rails, MongoDB and React with Typescript for its stack.  

## Getting started

### How to run

#### Docker

Currently the application is best deployed through a multi-container setup 
managed by `docker-compose`.

To build and run the application execute the following command:

```
docker-compose up --build
```

**Notes**: `-d` option could be used if a run as a daemon is preffered.

#### Checking out Poke Trade

In order to access the application access the following URL in your browser:

`http://localhost:3000`

Currently all available routes for the application is:

- `api/v1`: Api endpoints
  - `api/v1/pokemons`: [GET] All pokemons
  - `api/v1/pokemons/<id>`: [GET] Pokemons by its id
  - `api/v1/trades`: [GET] All trade
  - `api/v1/trades`: [POST] Insert new Trade by its [model](.app/models/trade.rb)
  - `api/v1/pokemons/<id>`: [GET] Trades by its id

- `/tradeapp`: UI Route for performing and analysing your pokemon trade
- `/tradeapp/history`: UI Route for visualizing your trade history

#### Live demo

Poke Trade live demo can be found at: https://lpeixoto-poke-trader.herokuapp.com
