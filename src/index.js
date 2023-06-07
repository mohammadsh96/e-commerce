import React from 'react';
import ReactDOM from 'react-dom/client';
import { productStore } from './redux';
import { Provider } from 'react-redux';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={productStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
