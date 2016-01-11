import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import store from './store';
import { routes } from './routes';

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>,
    document.getElementById('app')
);