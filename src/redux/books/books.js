const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
let lastId = 0;

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: { id } });

function bookReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_BOOK':
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
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
}

export default bookReducer;
