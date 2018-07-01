import * as React from 'react';

import './style.css';

export interface LoginStateProps {
  isLoggingIn: boolean;
  password: string;
  userName: string;
}

export interface LoginDispatchProps {
  login(userName: string, password: string): void;
  setPassword(password: string): void;
  setUserName(userName: string): void;
}

export type LoginProps = LoginStateProps & LoginDispatchProps;

export class LoginView extends React.PureComponent<LoginProps> {
  onLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isLoggingIn, login, password, userName } = this.props;
    if (!isLoggingIn) {
      login(userName, password);
    }
    return false;
  };

  onPasswordChanged = (e: React.FormEvent<HTMLInputElement>) => {
    if (this.props.isLoggingIn) return;
    this.props.setPassword(e.currentTarget.value);
  };

  onUserNameChanged = (e: React.FormEvent<HTMLInputElement>) => {
    if (this.props.isLoggingIn) return;
    this.props.setUserName(e.currentTarget.value);
  };

  render() {
    const { password, userName } = this.props;
    return (
      <main className="container login-form">
        <h2>Login</h2>
        <form onSubmit={this.onLoginSubmit}>
          <div className="form-group">
            <label>User name</label>
            <input
              disabled={this.props.isLoggingIn}
              onChange={this.onUserNameChanged}
              placeholder="Enter user name"
              type="text"
              value={userName}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              disabled={this.props.isLoggingIn}
              onChange={this.onPasswordChanged}
              placeholder="Enter password"
              type="password"
              value={password}
            />
          </div>
          <div className="form-group">
            <button
              className="button success"
              disabled={this.props.isLoggingIn}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </main>
    );
  }
}
