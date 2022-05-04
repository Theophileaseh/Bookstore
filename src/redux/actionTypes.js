// Action-types

export const CHECK_STATUS = 'CHECK_STATUS';
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: { id } });
export const checkStatus = () => ({ type: CHECK_STATUS });
