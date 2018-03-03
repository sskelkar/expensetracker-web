import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './js/reducers';
import Dashboard from './js/Dashboard';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Dashboard/>
    </Provider>,
    document.getElementById('app')
);