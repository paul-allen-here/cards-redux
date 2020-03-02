import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import storageMiddleware from './storage';
import App from './components/app/App';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(storageMiddleware));

ReactDOM.render( 
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));