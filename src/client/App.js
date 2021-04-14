import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Meals from "./components/Meals";
import Meal from "./components/Meal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddMeal from "./components/AddMeal";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/meals/:id">
        <Meal />
      </Route>
      <Route exact path="/meals">
        <Meals />
      </Route>
      <Route exact path="/add">
        <AddMeal />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
