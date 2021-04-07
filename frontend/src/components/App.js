import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Modal from "./Modal.js";
import Login from "./Login.js"

export default class App extends Component {
  state={
    modal:'none',
    login:'none',
    token:null
}

openModal=()=>{
    this.setState({
        modal: 'block'
      });
}
closeModal=()=>{
  this.setState({
    modal: 'none'
  });
}
openLogin=()=>{
  this.setState({
    login: 'block'
  });
}
closeLogin=()=>{
  this.setState({
    login: 'none'
  });
}

setToken(token){
  this.setState({
    token
  })
  if(this.state.token){
    this.closeLogin()
  }
  else{
    console.log("złe dane")
  }
}

  render() {
    const {login, modal} = this.state
    return (
      <div className="App">
        <Router>
          <nav>
            <Navigation modal={()=>this.openModal()} login={()=>this.openLogin()}/>
          </nav>
          <main>
            <Main />
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
          <Modal modal={modal} closeModal={this.closeModal.bind(this)}/>
          <Login login={login} closeLogin={this.closeLogin.bind(this)} setToken={this.setToken.bind(this)}/>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
