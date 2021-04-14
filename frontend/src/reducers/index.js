import loggedReducer from './isLogged';
import tokenReducer from './isToken'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    isLogged: loggedReducer,
    token: tokenReducer
})
export default allReducers