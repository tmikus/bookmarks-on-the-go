import * as React from 'react';
import { Login } from '../login';
import { Settings } from '../settings';

import './style.css';

export interface AppStateProps {
  isAuthenticated: boolean;
  isInitialised: boolean;
  isInitialising: boolean;
  view: string;
}

export interface AppDispatchProps {
  initialise: () => void;
}

export type AppProps = AppStateProps & AppDispatchProps;

export const AppView = (props: AppProps) => {
  if (!props.isInitialised && !props.isInitialising) {
    props.initialise();
  }
  return (
    <main className="main-view">
      {props.isInitialised && renderView(props.view)}
      {!props.isInitialised && <div className="loading-bar" data-role="activity" data-type="metro" data-style="dark"></div>}
    </main>
  );
};

function renderView(view: string) {
  switch (view) {
    case 'login': return <Login />;
    case 'settings': return <Settings />;
  }
  return null;
}
