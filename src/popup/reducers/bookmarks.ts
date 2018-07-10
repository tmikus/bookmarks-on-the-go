import { Action } from '../../core/types';

export interface BookmarksState {
  isLoading: boolean;
}

export const defaultBookmarksState: BookmarksState = {
  isLoading: false,
};

export const bookmarks = (state: BookmarksState = defaultBookmarksState, action: Action): BookmarksState => {
  return state;
};
