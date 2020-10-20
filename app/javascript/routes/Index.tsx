import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Trade from "../components/Trade";
import TradeHistory from "../components/TradeHistory";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tradeapp" exact component={Trade} />
      <Route path="/tradeapp/history" exact component={TradeHistory} />
    </Switch>
  </Router>
);
