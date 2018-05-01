import { call, put, takeLatest } from 'redux-saga/effects';
import BookmarksRepository from '../repositories/BookmarksRepository';
import { actionTypes } from '../constants/actionTypes';
import {
  addBookmarkError,
  addBookmarkSuccess, addCollectionError, addCollectionSuccess,
  bookmarksFetched, bookmarksFetchingError, collectionsFetched,
  collectionsFetchingError, delBookmarkError, delBookmarkSuccess, deleteCollectionError, deleteCollectionSuccess,
  shareCollectionError,
  shareCollectionSuccess, toggleCollectionViewError, toggleCollectionViewSuccess
} from '../actions/bookmarksActions';
import { applicationError } from '../actions/commonActions';

function* fetchBookmarksByCollectionId(action) {
  try {
    const res = yield call(BookmarksRepository.fetchBookmarksByCollectionId, action.payload);
    yield put(bookmarksFetched(res));
  } catch (e) {
    yield put(bookmarksFetchingError());
    yield put(applicationError(e));
  }
}

export function* bookmarksSaga() {
  yield takeLatest(actionTypes.FETCH_BOOKMARKS, fetchBookmarksByCollectionId);
}

function* fetchCollections() {
  try {
    const res = yield call(BookmarksRepository.fetchCollections);
    yield put(collectionsFetched(res));
  } catch (e) {
    yield put(collectionsFetchingError());
    yield put(applicationError(e));
  }
}

export function* collectionsSaga() {
  yield takeLatest(actionTypes.FETCH_COLLECTIONS, fetchCollections);
}

function* addBookmark(action) {
  try {
    const res = yield call(BookmarksRepository.addBookmark, action.payload);
    yield put(addBookmarkSuccess(res));
  } catch (e) {
    yield put(addBookmarkError());
    yield put(applicationError(e));
  }
}

export function* addBookmarkSaga() {
  yield takeLatest(actionTypes.ADD_BOOKMARK, addBookmark);
}

function* deleteBookmark(action) {
  try {
    const res = yield call(BookmarksRepository.deleteBookmark, action.payload);
    yield put(delBookmarkSuccess(res));
  } catch (e) {
    yield put(delBookmarkError());
    yield put(applicationError(e));
  }
}

export function* deleteBookmarkSaga() {
  yield takeLatest(actionTypes.DEL_BOOKMARK, deleteBookmark);
}

function* addCollection(action) {
  try {
    const res = yield call(BookmarksRepository.addCollection, action.payload);
    yield put(addCollectionSuccess(res));
  } catch (e) {
    yield put(addCollectionError());
    yield put(applicationError(e));
  }
}

export function* addCollectionSaga() {
  yield takeLatest(actionTypes.ADD_COLLECTION, addCollection);
}

function* shareCollection(action) {
  try {
    yield call(BookmarksRepository.shareCollection, action.payload);
    yield put(shareCollectionSuccess());
  } catch (e) {
    yield put(shareCollectionError());
    yield put(applicationError(e));
  }
}

export function* shareCollectionSaga() {
  yield takeLatest(actionTypes.SHARE_COLLECTION, shareCollection);
}

function* deleteCollection(action) {
  try {
    const res = yield call(BookmarksRepository.deleteCollection, action.payload);
    yield put(deleteCollectionSuccess(res));
  } catch (e) {
    yield put(deleteCollectionError());
    yield put(applicationError(e));
  }
}

export function* deleteCollectionSaga() {
  yield takeLatest(actionTypes.DELETE_COLLECTION, deleteCollection);
}

function* toggleCollectionView(action) {
  try {
    const res = yield call(BookmarksRepository.toggleCollectionView, action.payload);
    yield put(toggleCollectionViewSuccess(res));
  } catch (e) {
    yield put(toggleCollectionViewError());
    yield put(applicationError(e));
  }
}

export function* toggleCollectionViewSaga() {
  yield takeLatest(actionTypes.TOGGLE_VIEW, toggleCollectionView);
}
