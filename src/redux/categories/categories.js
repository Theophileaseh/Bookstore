const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({ type: CHECK_STATUS });

function categoryReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}

export default categoryReducer;
