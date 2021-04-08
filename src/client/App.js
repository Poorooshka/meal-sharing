import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Meals from "./components/Meals";
import Meal from "./components/Meal";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/meals/:id">
        <Meal />
      </Route>
      <Route exact path="/meals">
        <Meals />
      </Route>
    </Router>
  );
}

export default App;
