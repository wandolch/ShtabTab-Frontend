import { actionTypes } from '../constants/actionTypes';
import { bookmarksState } from '../states/bookmarksState';

export default (state = bookmarksState, action) => {
  switch (action.type) {
  case actionTypes.FETCH_BOOKMARKS:
    return Object.assign({}, state, {
      bookmarksLoading: true,
      bookmarksError: false
    });

  case actionTypes.FETCH_BOOKMARKS_SUCCESS:
    return Object.assign({}, state, {
      currentBookmarks: action.payload,
      bookmarksLoading: false,
      bookmarksError: false
    });

  case actionTypes.FETCH_BOOKMARKS_ERROR:
    return Object.assign({}, state, {
      bookmarksLoading: false,
      bookmarksError: true
    });

  case actionTypes.FETCH_COLLECTIONS:
    return Object.assign({}, state, {
      collections: action.payload
    });

  default:
    return state;
  }
};
