import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/NavBar/index.js";
import Home from "./components/Home";


class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="guestaccomodations" component={GuestAccomodations} /> */}
          </Switch>
      </Router>

    );
  }
}

export default App;
