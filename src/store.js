import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initial-state';
import cartReducer from './reducers/cart';

const rootReducer = combineReducers({
    cart: cartReducer
});

const store = applyMiddleware(thunk)(createStore)(rootReducer, initialState());

export default store;