// Reducers

import * as actions from '../actionTypes';
import initialData from './initialData';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TgwrnTOjnQa4qiNfFXCx/books';

export const getBooks = () => (dispatch) => {
  dispatch(actions.getBooksLoading());
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const formattedBooks = [];
      Object.keys(data).forEach((key) => {
        if (key) {
          formattedBooks.push({ ...data[key][0], item_id: key });
        }
      });
      dispatch(actions.getBooksSuccess(formattedBooks));
    })
    .catch((err) => {
      dispatch(actions.getBooksFailure(err.message));
    });
};

export const removeBook = (id) => (dispatch) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      dispatch(getBooks());
    });
};

export const registerNewBook = (newBook) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  })
    .then(() => {
      dispatch(actions.addBook(newBook));
    });
};

const bookReducer = (state = initialData, action) => {
  switch (action.type) {
    case actions.GET_BOOKS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.ADD_BOOK:
      return {
        ...state,
        loading: false,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};
export default bookReducer;
