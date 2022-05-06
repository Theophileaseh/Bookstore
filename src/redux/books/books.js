// Reducers

import * as actions from '../actionTypes';
import initialData from './initialData';

let lastId = 0;

const bookReducer = (state = initialData, action) => {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [
        ...state,
        {
          id: ++lastId,  // eslint-disable-line
          name: action.payload.name,
          category: action.payload.category,
          author: action.payload.author,
          percent: action.payload.percent,
          chapter: action.payload.chapter,
        },
      ];
    case actions.REMOVE_BOOK:
      return state.filter((books) => books.id !== action.payload.id);

    default:
      return state;
  }
};

export default bookReducer;
