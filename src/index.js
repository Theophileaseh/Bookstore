import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
// import * as actions from './redux/actionTypes';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

/*
store.dispatch({
  type: actions.ADD_BOOK,
  payload: {
    name: 'The Hunger Games',
    category: 'Action',
    author: 'Anna Frank',
    percent: '64%',
    chapter: 'Chapter 17',
  },
});

store.dispatch({
  type: actions.REMOVE_BOOK,
  payload: {
    name: 1,
  },
});

store.dispatch({
  type: actions.CHECK_STATUS,
  payload: 'Under Construction',
});
*/
