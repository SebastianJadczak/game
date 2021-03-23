import React from 'react'
import { Switch, Route } from "react-router-dom";
import Error from "./Main/Error.js"
import Basic from "./Main/Basic.js"

const Main = () => {
    return (
        <div className="main">


            <Switch>
                <Route path="/" exact component={Basic} />
                <Route path="/ipsum" component={Error} />
                <Route path="/dolor" component={Error} />
                <Route path="/sitAmet" component={Error} />
                <Route path="/aliquip" component={Error} />
                <Route component={Error} /> 
            </Switch>
        </div>
    )
}
export default Main;