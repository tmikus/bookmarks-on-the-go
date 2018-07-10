import * as React from 'react';
import { Login } from '../login';
import { Settings } from '../settings';

import './style.css';

export interface AppStateProps {
  view: string;
}

export interface AppDispatchProps {
}

export type AppProps = AppStateProps & AppDispatchProps;

export const AppView = (props: AppProps) => {
  return (
    <main className="main-view">
      {renderView(props.view)}
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
