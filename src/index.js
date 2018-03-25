import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import initState from './initState';
import App from './App';
import app from './reducers/app.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    app,
    initState,
    composeWithDevTools(applyMiddleware(logger)),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
