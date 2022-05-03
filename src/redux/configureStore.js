import { createStore } from 'redux';
import newReducer from './combineReducers';

const store = createStore(newReducer);

export default store;
