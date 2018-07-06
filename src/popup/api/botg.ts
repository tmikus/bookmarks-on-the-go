import { ApiUrl } from '../config';

export interface LoginResult {
  message: string | undefined;
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
    .then((res) => ({ success: true, message: undefined }))
    .catch((ex) => ({ success: false, message: ex }));
}
