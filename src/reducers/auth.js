import  initialState from './../initial-state';

const AuthReducer = function(state, action){
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'LOGIN':
            newState.loggedIn = true;
            return newState;
        case 'LOGOUT':
            newState.loggedIn = false;
            return newState;
        default:
            return state || initialState().auth;
    }
};

export default AuthReducer;