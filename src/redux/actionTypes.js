// Action-types

export const CHECK_STATUS = 'CHECK_STATUS';
export const ADD_BOOK = 'ADD_BOOK';
export const GET_BOOKS_SUCCESS = 'bookstore/GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'bookstore/GET_BOOKS_FAILURE';
export const GET_BOOKS_LOADING = 'bookstore/GET_BOOKS_LOADING';

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const getBooksSuccess = (books) => ({ type: GET_BOOKS_SUCCESS, payload: books });
export const getBooksFailure = (errMessage) => ({ type: GET_BOOKS_FAILURE, payload: errMessage });
export const getBooksLoading = () => ({ type: GET_BOOKS_LOADING });
