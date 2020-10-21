Poke Trade
----------

# Overview

Poke Trader is a demo application intended to analyze pokemons trade based
on its `base experience` info gathered from [PokeAPI](https://github.com/PokeAPI/pokeapi). It leverages 
Ruby on Rails, MongoDB and React with Typescript for its stack.  

# Getting started

## How to run

### Docker

Currently the application is best deployed through a multi-container setup 
managed by `docker-compose`.

To build and run the application execute the following command:

```
docker-compose up --build
```

**Notes**: `-d` option could be used if a run as a daemon is preffered.

### Checking out Poke Trade

In order to access the application access the following URL in your browser:

`http://localhost:3000`

**Notes**: Due to its stack (MongoDB) Poke Trader is not able to deploy within a free tier
using Heroku.
