import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import FunPics from "./components/FunPics"
import Home from "./components/Home"
import TeamInfo from "./components/TeamInfo"
import Science from "./components/Science"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={Home} />
        <Route
          exact
          path="/team-fun"
          render={(props) => <FunPics {...props} />}
        />
        <Route
          exact
          path="/meet-the-team"
          render={(props) => <TeamInfo {...props} />}
        />
        <Route
          exact
          path="/science-article"
          render={(props) => <Science {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
