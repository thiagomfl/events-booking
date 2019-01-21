import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Auth from "./components/pages/Auth";
import Bookings from "./components/pages/Bookings";
import Events from "./components/pages/Events";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Route path="/auth" component={Auth} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/events" component={Events} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
