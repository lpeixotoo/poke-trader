import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Trade from "../components/Trade";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/trade" exact component={Trade} />
    </Switch>
  </Router>
);
