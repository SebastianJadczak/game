import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

export default class App extends Component {
  state={
    modal:'none',
}
modal=()=>{
    this.setState({
        modal: 'block'
      });
}
closeModal=()=>{
  this.setState({
    modal: 'none'
  });
}
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Navigation modal={()=>this.modal()}/>
          </nav>
          <main>
            <Main />
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
        <div style={{display:`${this.state.modal}`,position:"absolute",top:"0px", left:"0px", width:"100vw", height:"100vh",backgroundColor: "rgba(255,255,255, 0.2"}}>
          
          <div id="modal">
            <span id="x" onClick={this.closeModal}>X</span>
            <h3>Szukaj</h3>
            <form>
              <input id="value" type="text"></input>
              <input type="checkbox"></input>
              <input type="submit" value="Szukaj"></input>
            </form>
          </div>
          
         
        </div>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
