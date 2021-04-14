import React, { Component } from 'react'



export default class Contacts extends Component {
    constructor(props) {
        super(props);
      }

    componentDidMount() {

        fetch('/api/network/contacts', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Token ${this.props.token}`
            },
        })
            .then(r => r.json())
            .then(data => {
                this.setState({
                    dataPost: data
                })
            })
    }
 

    render() {
       
        return (
            <>
                <div id="contact_tools"><h3>Kontakty</h3></div>
                
            </>
        )
    }
}
