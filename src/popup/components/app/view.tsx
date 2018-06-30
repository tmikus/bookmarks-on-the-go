import * as React from 'react';

import './style.css';

export interface AppStateProps {
  isAuthenticated: boolean;
  view: string;
}

export interface AppDispatchProps {

}

export type AppProps = AppStateProps & AppDispatchProps;

export const AppView = (props: AppProps) => (
  <main className="container login-form">
    <h2>Login</h2>
    <form>
      <div className="form-group">
        <label>User name</label>
        <input type="text" placeholder="Enter user name"/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password"/>
      </div>
      <div className="form-group">
        <button className="button success" type="submit">Login</button>
      </div>
    </form>
  </main>
);
