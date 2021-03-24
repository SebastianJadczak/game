import React from 'react'

const Login = (props) => {
    return (
        <div className="login" style={{display:`${props.login}`,position:"absolute",top:"0px", left:"0px", width:"98.7vw", minHeight:"198vh",backgroundColor: "rgba(255,255,255, 0.7"}}>
            <div id="login">
            <h3>Zaloguj</h3>
            <form method="post" action=".">
                <div id="username"><label>Login:</label><input type="text" name="username"/></div>
                <div id="password"><label>Password:</label><input type="password" name="password"/></div>
                <div id="submit">
                    <input type="submit" value="Zaloguj"/>
                    <input value="Anuluj" type="button" onClick={props.closeLogin}/>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Login;