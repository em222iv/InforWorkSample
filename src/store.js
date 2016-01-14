import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initial-state';
import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

const store = applyMiddleware(thunk)(createStore)(rootReducer, initialState());

export default store;