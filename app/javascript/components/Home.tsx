import * as React from "react"
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Poke Trader</h1>
        <p className="lead">
          A web app for analysing fair pokemons trades
        </p>
        <hr className="my-4" />
        <Link
          to="/trade"
          className="btn btn-lg custom-button"
          role="button"
        >
          Start Trade
        </Link>
      </div>
    </div>
  </div>
);
