import React, { Component } from "react";
import Slider from "./Slider.js"
import { NavLink } from 'react-router-dom'

class Basic extends Component {

    state={
        dataPost: [],
    }

    componentWillMount() {

        fetch('/api/post', {
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
        const posts = this.state.dataPost.map(item => (
            <li key={item.id}> 
                <NavLink key={item.id} to={`/post/${item.id}`} >
                    <div class="image"><img src={item.image}/></div>
                    <h3>{item.title}</h3>
                    <p>{item.created_at.slice(0,10)}</p>
                </NavLink>
            </li>
        ))
        return (
            <div className="basic">
            <Slider/>
            <div className="title">
                    <i class="fas fa-star"></i>
                    <h3>Aktualności</h3>
                    <i class="fas fa-star"></i>
            </div>
            <div id="posts">
                <ul>
                    {posts}
                </ul>
            </div>
            </div>
        )
}   }
export default Basic;