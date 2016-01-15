import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrap from './components/wrap';
import Home from './components/home';
import Products from './components/products';
import Checkout from './components/checkout';
import CartView from './components/cartView';


export const routes = (
    <Route path="/" component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path="products" component={Products}/>
        <Route path="checkout" component={Checkout}/>
        <Route path="cartview" component={CartView}/>
    </Route>
);