import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/NavBar/index.js";
import Home from "./components/Home";
import GuestAccommodations from "./components/GuestAccommodations"
import Photos from "./components/Photos"
import OurWedding from './components/OurWedding'
import Registry from './components/Registry'
import RSVP from './components/RSVP/rsvp';

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
            <Route exact path="/registry" component={Registry} />
            <Route exact path="/rsvp" component={RSVP} />
          </Switch>
      </Router>

    );
  }
}

export default App;
