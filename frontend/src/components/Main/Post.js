import React, {Component} from 'react'
import Slider from "./Slider.js"

class Post extends Component {
    state={
        detailPost: [],
    }


    componentWillMount() {

        fetch(`/api/post/${window.location.pathname.slice(6,9)}`, {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    detailPost: data
                })
            })
    }

    render(){
        // destructuring
        const {detailPost} = this.state

        return (
            <>
                <Slider/>
            <div className="post">
            
                <div className="postTitle">
                    <i class="fas fa-book-open"></i>
                    <h3>{detailPost.title}</h3>
                    <i class="fas fa-book-open"></i>
                </div>
                <div className="postImage">
                    <img src={detailPost.image}/>
                </div>
                <div className="postDescription">
                    <p>{detailPost.descriptions}</p>
                </div>
                <div className="date">
                    <p>{detailPost.created_at? detailPost.created_at.slice(0,10) :null}</p>
                </div>
                <div className="author">
                    <p>{detailPost.author}</p>
                </div>
            </div>
            </>
        )
}}
export default Post;