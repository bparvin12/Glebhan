import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/NavBar/index.js"
import Home from "./pages/Home"


class App extends Component {
  render() {
    return (
      <Router>
        <Navigation>
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>
        </Navigation>
      </Router>
    );
  }
}

export default App;
