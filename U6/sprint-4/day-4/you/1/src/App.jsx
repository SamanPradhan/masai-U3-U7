import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Add from "./Add";
import Book from "./Book";

function App() {
  return (
    <Router>
      <div data-testid="car-rental-app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/book/:id" component={Book} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
