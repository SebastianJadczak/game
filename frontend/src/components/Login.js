import React, {Component} from 'react'

class Login extends Component{
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
    login = event=>{
        fetch(`/auth/`, {
            credentials: 'include',
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(
            data=>data.json()
        )
        .then(
            data=>{ this.props.setToken(data.token)
            console.log(data.token)}
        )
        .catch(err=>console.error(err))
    }

    render(){
        const {credentials} = this.state

    return (
        <div className="login" style={{display:`${this.props.login}`,position:"absolute",top:"0px", left:"0px", width:"98.7vw", minHeight:"198vh",backgroundColor: "rgba(255,255,255, 0.7"}}>
            <div id="login">
            <h3>Zaloguj</h3>
            <div id="form" >
                <div id="username"><label>Login:</label><input type="text" name="username" onChange={this.inputhandle} value={credentials.username}/></div>
                <div id="password"><label>Password:</label><input type="password" name="password" onChange={this.inputhandle} value={credentials.password}/></div>
                <div id="submit">
                    <input type="submit" value="Zaloguj"onClick={this.login}/>
                    <input value="Anuluj" type="button" onClick={this.props.closeLogin}/>
                </div>
                <p id="register_link" onClick={this.props.register}>Nie masz konta?</p>
            </div>
            </div>
        </div>
    )
}}
export default Login;