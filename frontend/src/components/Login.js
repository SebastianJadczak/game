import React, {Component} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {set} from '../actions/index.js'

// class Login extends Component{
const Login = (props)=>{
    // constructor(props) {
    //     super(props);
    //   }
    //   state={
    //       credentials:{username:"", password: ""},
         
    //   }
    
    // inputhandle = e =>{
    //     const cred = this.state.credentials
    //     cred[e.target.name]= e.target.value
    //     this.setState({
    //         credentials:cred
    //     })
    // }
    const isLogged = useSelector(state=>state.isLogged);
    const isToken  = useSelector(state=>state.token )
    const dispatch = useDispatch()

    function loginMethod (){
        fetch(`/auth/`, {
            credentials: 'include',
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(props.credentials)
        })
        .then(
            data=>data.json()
        )
        .then(
            data=>{ props.setToken(data.token)
                dispatch(set(data.token))
            // console.log(data.token)}
            }
        )
        .catch(err=>console.error(err))
    }

    function xx (){
       loginMethod()
        // dispatch(set(props.token))
    }

    // render(){

      {/* <button onClick={()=> dispatch(set(props.token))}>xzczxczxczx</button> */}
        {/* {console.log(isLogged)} */}
        
        const {text, login, closeLogin, register, inputhandle} = props

    return (
        <div className="login" style={{display:`${login}`,position:"absolute",top:"0px", left:"0px", width:"98.7vw", minHeight:"198vh",backgroundColor: "rgba(255,255,255, 0.7"}}>
            <div id="login">
            <h3>Zaloguj</h3>
            {text? <p style={{color:"red"}}>{text}</p> :null}
            <div id="form" >
                <div id="username"><label>Login:</label><input type="text" name="username" onChange={inputhandle} value={props.credentials.username}/></div>
                <div id="password"><label>Password:</label><input type="password" name="password" onChange={inputhandle} value={props.credentials.password}/></div>
                <div id="submit">
                    <input type="submit" value="Zaloguj"onClick={xx}/>
                    <input value="Anuluj" type="button" onClick={closeLogin}/>
                </div>
                <p id="register_link" onClick={register}>Nie masz konta?</p>
            </div>
            </div>
            
        </div>
    )
// }}
    }
export default Login;