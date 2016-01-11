import { combineReducers, createStore } from 'redux';

import initialState from './initial-state';
import authReducer from './reducers/auth';

const reducers = combineReducers({
    auth: authReducer,
});

const store = createStore(reducers, initialState());

export default store;