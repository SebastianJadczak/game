import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, { Component } from "react";
import Error from "./Main/Error.js"
import Basic from "./Main/Basic.js"
import Post from "./Main/Post.js"
import Contact from "./Main/Contact.js"
import SnakeGame from "./Main/SnakeGame.js"
import BigMoney from "./BigMoney/BigMoney.js"
import Faq from "./FAQ/Faq.js"
import Network from "./Network/Network.js"
import Error403 from "./Error/Error403.js"


class Main extends Component {
    constructor(props) {
        super(props);
      }
    
    state={
        dataPost: [],
        list:[]
    }


    render(){
        return (
         
            <div className="main">
                <Switch>
                    <Route path="/" exact component={Basic} />
                    <Route path="/faq" component={Faq} />
                    {this.props.token?<Route path="/network" component={Network}/>:<Route path="/error403" component={Error403}/>}
                    <Route path="/bigmoney" component={BigMoney} />
                    <Route path="/snakegame" component={SnakeGame} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/post/" exact component={Post} />    
                    <Route path="/post/:id" component={Post} />       
                    <Route component={Error} /> 
                </Switch>
             
            </div>
          
        )
}}
export default Main;