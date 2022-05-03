import { combineReducers } from 'redux';

import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const newReducer = combineReducers({
  bookReducer,
  categoryReducer,
});

export default newReducer;
