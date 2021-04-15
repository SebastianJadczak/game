import React, { Component } from 'react'
import ContactsList from './ContactsList.js'

export default class Contacts extends Component {
    constructor(props) {
        super(props);
      }
      state={
        token:"",
        dataContact: []
      }
    setTokenInState = (token)=>{
        this.setState({
            token
        })
    }

    componentWillMount() {

        fetch('/api/network/contacts/', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Token ${this.state.token}`
            },
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                console.log(this.state.token)
                // this.setState({
                //     dataContact: data
                // })
            })
    }
 

    render() {
        return (
            <>
                <div id="contact_tools"><h3>Kontakty</h3></div>
                <ContactsList setTokenInState={this.setTokenInState.bind(this)}/>
                {this.state.dataContact}
            </>
        )
    }
}
