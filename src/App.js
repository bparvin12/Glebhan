import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop';

// import Navigation from "./components/NavBar/index.js";
import Home from "./pages/Home";
import GuestAccommodations from "./pages/GuestAccommodations"
import Photos from "./pages/Photos"
import OurWedding from './pages/OurWedding'
import MetaNavBar from './pages/MetaNavBar/MetaNavBar.component';
import Registry from './pages/Registry'
import RSVP from './pages/RSVP/rsvp';
import Footer from './pages/Footer';
// import Covid from './pages/Covid';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <MetaNavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/our-wedding' component={OurWedding} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/guest-accommodations" component={GuestAccommodations} />
            <Route exact path="/registry" component={Registry} />
            <Route exact path="/rsvp" component={RSVP} />
            {/* <Route exact path="/covid-19" component={Covid} /> */}
          </Switch>
        <Footer />
      </Router>

    );
  }
}

export default App;
