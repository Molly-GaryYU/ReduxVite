import React from 'react';
import App from './App';
import ReactDOM, { Root } from 'react-dom/client'; // 引入 createRoot 和 Root 类型
import store from './store';
import { Provider } from 'react-redux';

const rootElement: HTMLDivElement | null = document.getElementById(
  'root'
) as HTMLDivElement;
const root: Root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
