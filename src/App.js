import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to Gaire Tech, LLC.</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>We're currently under construction. Come back soon!</p>
        </header>
      </div>
    );
  }
}

export default App;
