import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Navigation />
          </nav>
          <main>
            <Main />
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
