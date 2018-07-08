import {
  Action,
  AsyncAction,
} from './index';
import { getBookmarks } from '../api/botg';
import { createLoggedOutAction } from './auth';

export interface BookmarksState {
  isLoading: boolean;
}

export const defaultBookmarksState: BookmarksState = {
  isLoading: false,
};

export const bookmarks = (state: BookmarksState = defaultBookmarksState, action: Action): BookmarksState => {

  return state;
};

export function createGetBookmarksAction(): AsyncAction {
  return async (dispatch) => {
    dispatch(createGetBookmarksStartedAction());
    const result = await getBookmarks();
    if (!result.success) {
      return dispatch(createLoggedOutAction());
    } else {
      return dispatch(createGetBookmarksCompletedAction());
    }
  };
}

export interface GetBookmarksStartedAction extends Action<'bookmarks:get:start'>{
}

export function createGetBookmarksStartedAction(): GetBookmarksStartedAction {
  return { type: 'bookmarks:get:start' };
}

export function isGetBookmarksStartedAction(action: Action): action is GetBookmarksStartedAction {
  return action.type === 'bookmarks:get:start';
}

export interface GetBookmarksCompletedAction extends Action<'bookmarks:get:completed'> {
  // TODO: Data?
}

export function createGetBookmarksCompletedAction(): GetBookmarksCompletedAction {
  return { type: 'bookmarks:get:completed' };
}

export function isGetBookmarksCompletedAction(action: Action): action is GetBookmarksCompletedAction {
  return action.type === 'bookmarks:get:completed';
}
