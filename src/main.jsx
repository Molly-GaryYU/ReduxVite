/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import store from './store/index.ts'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
           <App />
    </Provider>
)
