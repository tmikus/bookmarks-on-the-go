export interface LoginData {
  password: string;
  userName: string;
}

export function clearLoginData(): void {
  delete localStorage.userName;
  delete localStorage.password;
}

export function getLoginData(): LoginData | undefined {
  const userName = localStorage.userName;
  const password = localStorage.password;
  if (userName === undefined || password === undefined) return undefined;
  return {
    password,
    userName,
  };
}

export function setLoginData(data: LoginData): void {
  localStorage.userName = data.userName;
  localStorage.password = data.password;
}
