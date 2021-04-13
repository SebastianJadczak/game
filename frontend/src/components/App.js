import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Modal from "./Modal.js";
import Login from "./Login.js"
import Register from "./Register.js"

export default class App extends Component {
  state={
    modal:'none',
    login:'none',
    register:'none',
    token:false,
    textLogin:""
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
    this.setState({
      textLogin: "Złe dane. Spróbuj jeszcze raz."
    })
  }
}

register=()=>{
  this.setState({
    login: 'none',
    register: 'block'
  });
}
closeRegister=()=>{
  this.setState({
    register: 'none'
  });
}
  render() {
    const {login, modal, register, token} = this.state
    return (
      <div className="App">
        <Router>
          <nav>
            <Navigation modal={()=>this.openModal()} login={()=>this.openLogin()} token={token}/>
          </nav>
          <main>
            <Main />
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
          <Modal modal={modal} closeModal={this.closeModal.bind(this)}/>
          <Login login={login} register={this.register} closeLogin={this.closeLogin.bind(this)} setToken={this.setToken.bind(this)} text={this.state.textLogin}/>
          <Register register={register} closeRegister={this.closeRegister.bind(this)}/>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
