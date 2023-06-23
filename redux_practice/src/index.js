import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// redux-toolkit 사용법 2
import { Provider } from 'react-redux';
import store from './Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* redux-toolkit 사용법 2 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);