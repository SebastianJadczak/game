import React, {Component} from 'react'

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
            <div className="post">
            
            {detailPost.title}
        
            </div>
        )
}}
export default Post;