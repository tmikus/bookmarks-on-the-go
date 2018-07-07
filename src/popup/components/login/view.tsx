import * as React from 'react';

export interface LoginStateProps {
  error: string | undefined;
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
        {this.props.error && <p className="remark alert">{this.props.error}</p>}
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
            <div className="grid">
              <div className="row">
                <div className="cell-3">
                  <button
                    className="button success"
                    disabled={this.props.isLoggingIn}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                {
                  this.props.isLoggingIn &&
                  <div className="cell">
                    <div className="loading-bar" data-role="activity" data-type="metro" data-style="dark"></div>
                  </div>
                }
              </div>
            </div>
          </div>
        </form>
      </main>
    );
  }
}
