import  initialState from './../initial-state';

const cartReducer = function(state, action){
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'UPDATE':
            newState.cart = action.cart;
            console.log(newState.cart);
            return newState;
        default:
            return state || initialState().cart;
    }
};

export default cartReducer;