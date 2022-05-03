import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/configureStore';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);

store.dispatch({
  type: 'AddBook',
  payload: {
    name: 'The Hunger Games',
    category: 'Action',
    author: 'Anna Frank',
    percent: '64%',
    chapter: 'Chapter 17',
  },
});

store.dispatch({
  type: 'RemoveBook',
  payload: {
    name: 1,
  },
});
