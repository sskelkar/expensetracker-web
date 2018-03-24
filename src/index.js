import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducers';
import {Main} from './pages/Main';

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);