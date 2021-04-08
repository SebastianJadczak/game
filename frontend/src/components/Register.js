import React, {Component} from 'react'

class Register extends Component{
    constructor(props) {
        super(props);
      }
      state={
          credentials:{username:"", password: ""},
         
      }
    
    inputhandle = e =>{
        const cred = this.state.credentials
        cred[e.target.name]= e.target.value
        this.setState({
            credentials:cred
        })
    }
    register = event=>{
        fetch(`/users`, {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(
            data=>data.json()
        )
        .then(
            data=> console.log(data.token)
        )
        .catch(err=>console.error(err))
    }

    render(){
        const {credentials}=this.state

    return (
        <div className="register" style={{display:`${this.props.register}`,position:"absolute",top:"0px", left:"0px", width:"98.7vw", minHeight:"198vh",backgroundColor: "rgba(255,255,255, 0.7"}}>
            <div id="register">
                <h3>Zarejestruj</h3>
                <div id="form" >
                    <div id="username"><label>Login:</label><input type="text" name="username" onChange={this.inputhandle} value={credentials.username}/></div>
                    <div id="password"><label>Password:</label><input type="password" name="password" onChange={this.inputhandle} value={credentials.password}/></div>
                    <div id="submit">
                        <input type="submit" value="Zarejestruj"onClick={this.register}/>
                        <input value="Anuluj" type="button" onClick={this.props.closeRegister}/>
                    </div>
                </div>
            </div>
        </div>
    )
}}
export default Register;