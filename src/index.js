import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/reducers';
import Dashboard from './components/Dashboard';

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Dashboard/>
    </Provider>,
    document.getElementById('app')
);