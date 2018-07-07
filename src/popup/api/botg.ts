import { ApiUrl } from '../config';

export interface LoginResult {
  errorMessage: string | undefined;
  success: boolean;
}

export function login(userName: string, password: string): Promise<LoginResult> {
  return fetch(`${ApiUrl}auth/login`, {
      body: JSON.stringify({
        UserName: userName,
        Password: password,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      method: 'POST',
    })
    .then((res) => ({ success: true, errorMessage: undefined }))
    .catch((ex) => ({ success: false, errorMessage: ex }));
}

export interface LogoutResult {
  errorMessage: string | undefined;
  success: boolean;
}

export function logout(): Promise<LogoutResult> {
  return fetch(`${ApiUrl}auth/logout`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      method: 'POST',
    })
    .then(() => ({ success: true, errorMessage: undefined }))
    .catch((ex) => ({ success: false, errorMessage: ex }));
}
