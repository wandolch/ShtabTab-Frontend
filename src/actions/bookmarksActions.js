import { actionTypes } from '../constants/actionTypes';

export function fetchBookmarks(id) {
  return {
    type: actionTypes.FETCH_BOOKMARKS,
    payload: id
  };
}

export function bookmarksFetched(bookmarks) {
  return {
    type: actionTypes.FETCH_BOOKMARKS_SUCCESS,
    payload: bookmarks
  };
}

export function bookmarksFetchingError() {
  return {
    type: actionTypes.FETCH_BOOKMARKS_ERROR
  };
}

export function fetchCollections() {
  return {
    type: actionTypes.FETCH_COLLECTIONS
  };
}

export function collectionsFetched(collections) {
  return {
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
  };
}

export function collectionsFetchingError() {
  return {
    type: actionTypes.FETCH_COLLECTIONS_ERROR
  };
}

export function setCurrentCollection(collection) {
  return {
    type: actionTypes.SET_CURRENT_COLLECTION,
    payload: collection
  };
}

export function setBookmarksSearch(query) {
  return {
    type: actionTypes.SET_BOOKMARKS_SEARCH,
    payload: query
  };
}

export function addBookmark(bm) {
  return {
    type: actionTypes.ADD_BOOKMARK,
    payload: bm
  };
}

export function addBookmarkSuccess(bm) {
  return {
    type: actionTypes.ADD_BOOKMARK_SUCCESS,
    payload: bm
  };
}

export function addBookmarkError() {
  return {
    type: actionTypes.ADD_BOOKMARK_ERROR
  };
}

