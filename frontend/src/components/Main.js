import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, { Component } from "react";
import Error from "./Main/Error.js"
import Basic from "./Main/Basic.js"
import Post from "./Main/Post.js"

class Main extends Component {
    
    state={
        dataPost: [],
    }

    componentDidMount() {

        fetch('/api/room', {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    dataPost: data
                })
            })
    }

    render(){
        return (
         
            <div className="main">
                <Switch>
                    <Route path="/" exact component={Basic} />
                    <Route path="/ipsum" component={Error} />
                    <Route path="/dolor" component={Error} />
                    <Route path="/sitAmet" component={Error} />
                    <Route path="/aliquip" component={Error} />
                    <Route path="/post/" exact component={Post} />    
                    <Route path="/post/:id" component={Post} />       
                    <Route component={Error} /> 
                </Switch>
             
            </div>
          
        )
}}
export default Main;