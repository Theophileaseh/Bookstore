// Reducers
import * as actions from '../actionTypes';

export const CHECK_STATUS = 'CHECK_STATUS';
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case actions.CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categoryReducer;
