import { ApiUrl } from '../config';

export interface LoginResult {
  errorMessage: string | undefined;
  success: boolean;
}

export async function login(userName: string, password: string): Promise<LoginResult> {
  try {
    const response = await fetch(`${ApiUrl}auth/login`, {
      body: JSON.stringify({
        UserName: userName,
        Password: password,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      method: 'POST',
    });
    if (response.status !== 200) {
      return {
        success: false,
        errorMessage: await response.text(),
      };
    }
    return { success: true, errorMessage: undefined };
  } catch (ex) {
    return { success: false, errorMessage: ex.toString() };
  }
}

export interface LogoutResult {
  errorMessage: string | undefined;
  success: boolean;
}

export async function logout(): Promise<LogoutResult> {
  try {
    const response = await fetch(`${ApiUrl}auth/logout`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      method: 'POST',
    });
    if (response.status !== 200) {
      return {
        success: false,
        errorMessage: await response.text(),
      };
    }
    return { success: true, errorMessage: undefined };
  }
  catch (ex) {
    return { success: false, errorMessage: ex.toString() };
  }
}

export interface Bookmark {
  children: Array<Bookmark>;
  index: number;
  title: string;
  urn: string;
}

export interface GetBookmarksResult {
  bookmarks: Array<Bookmark> | undefined;
  errorMessage: string | undefined;
  success: boolean;
}

export async function getBookmarks(): Promise<GetBookmarksResult> {
  try {
    console.log('Attempting to get bookmarks')
    const response = await fetch(`${ApiUrl}bookmarks`);
    console.log('Response:', response);
    if (response.status !== 200) {
      return {
        bookmarks: undefined,
        errorMessage: await response.text(),
        success: false,
      };
    }
    return {
      bookmarks: await response.json(),
      errorMessage: undefined,
      success: true,
    };
  }
  catch (ex) {
    console.error('Error:', ex);
    return {
      bookmarks: undefined,
      errorMessage: ex.toString(),
      success: false,
    };
  }
}
