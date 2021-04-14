import App from "./components/App.js";
import ReactDOM from 'react-dom'
import React from 'react'
import {createStore} from 'redux'
import { Provider } from "react-redux";
import allReducer from "./reducers/index.js"

const store = createStore(allReducer)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'));
