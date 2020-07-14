import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Navigation from "./components/NavBar/index.js";
import Home from "./pages/Home";
import GuestAccommodations from "./pages/GuestAccommodations"
import Photos from "./pages/Photos"
import OurWedding from './pages/OurWedding'
import MetaNavBar from './pages/MetaNavBar/MetaNavBar.component';


class App extends Component {
  render() {
    return (
      <Router>
        <MetaNavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/our-wedding' component={OurWedding} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/guest-accommodations" component={GuestAccommodations} />
          </Switch>
      </Router>

    );
  }
}

export default App;
