import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/NavBar/index.js";
import Home from "./components/Home";
import GuestAccommodations from "./components/GuestAccommodations"
import Photos from "./components/Photos"
import OurWedding from './components/OurWedding'


class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/ourwedding' component={OurWedding} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/guestaccommodations" component={GuestAccommodations} />
          </Switch>
      </Router>

    );
  }
}

export default App;
