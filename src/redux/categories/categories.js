// Reducers
import * as actions from '../actionTypes';

function categoryReducer(state = [], action) {
  switch (action.type) {
    case actions.CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}

export default categoryReducer;
