const isToken = (state=false, action)=>{
    switch (action.type){
        case 'SET':
            return state + action.token;
        default:
            return state
    }

};
export default isToken