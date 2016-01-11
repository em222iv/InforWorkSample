import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrap from './components/wrap';
import Home from './components/home';


export const routes = (
    <Route path="/" component={Wrap}>
        <IndexRoute component={Home}/>
    </Route>
);