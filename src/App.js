import React from "react";
import { Home, Evolucao } from "./pages";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          path="/evolucaoparatodes"
          render={props => <Evolucao {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
