import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "/imports/ui/Theme";

import "./App.css";

export class App extends Component {
  render() {
    const { header, content, footer } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <div className="App">
          {header}
          {content}
          {footer}
        </div>
      </ThemeProvider>
    );
  }
}
