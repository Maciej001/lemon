import React, { Component } from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { App } from "./App.jsx";
import { Home } from "/imports/api/home/Home";
import Header from "/imports/api/headers/Header";
import Footer from "/imports/api/headers/Footer";
import DriverRegistration from "/imports/api/drivers/DriverRegistration";

export class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute
            components={{
              header: Header,
              content: Home,
              footer: Footer
            }}
          />
        </Route>

        <Route path="/drivers" component={App}>
          <IndexRoute
            components={{
              header: Header,
              content: Home,
              footer: Footer
            }}
          />
        </Route>

        <Route path="/drivers/register" component={App}>
          <IndexRoute
            components={{
              header: Header,
              content: DriverRegistration,
              footer: Footer
            }}
          />
        </Route>
      </Router>
    );
  }
}
