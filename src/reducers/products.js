import  initialState from './../initial-state';

const productReducer = function(state, action){
    const newState = Object.assign({}, state);
    switch(action.type){
        case 'GET-PRODUCTS':
            newState.items = action.items;
            return newState;
        default:
            return state || initialState().products;
    }
};

export default productReducer;