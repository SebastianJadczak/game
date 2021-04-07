import React, { Component } from 'react'
export default class Sponsored extends Component {

    state = {
        sponsored:[]
    }
   
    componentDidMount() {

        fetch('/api/sponsored', {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    sponsored: data
                })
            })
    }

    render() {

        const {sponsored} = this.state

        let list_sponsored =sponsored.map(item=>(
            <li key={item.id}> <a key={item.id} href={`https://${item.www}`} >
                <div id="wrap_sponsored">
                    <div id="image_sponsored"><img src={item.image} /></div>
                    <div id="title_sponsored">
                        <span>{item.title}</span>
                        <p>{item.www}</p>
                    </div>
                </div>
                </a></li>
        ))

        return (
            <>
                <h3>Sponsorowane:</h3>
                <div className="post_sponsored">
                    <ul>
                        {list_sponsored}
                    </ul>
                </div>
            </>
        )
    }
}
