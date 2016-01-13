import  initialState from './../initial-state';

const cartReducer = function(state, action){
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'GET-ALL':
            newState.items = action.items;
            return newState;
        case 'REM':
            newState.items = action.cart;
            console.log(newState.items);
            return newState;
        case 'INC':
            newState.items = action.cart;
            console.log(newState.items);
            return newState;
        default:
            return state || initialState().cart;
    }
};

export default cartReducer;