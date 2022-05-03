let lastId = 0;

function bookReducer(state = [], action) {
  switch (action.type) {
    case 'AddBook':
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
    case 'RemoveBook':
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
}

export default bookReducer;
