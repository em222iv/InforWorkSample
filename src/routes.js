import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrap from './components/wrap';
import Home from './components/home';
import Products from './components/products';


export const routes = (
    <Route path="/" component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path="products" component={Products}/>
    </Route>
);