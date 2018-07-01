import * as React from 'react';
import { Login } from '../login';

export interface AppStateProps {
  isAuthenticated: boolean;
  view: string;
}

export interface AppDispatchProps {

}

export type AppProps = AppStateProps & AppDispatchProps;

export const AppView = (props: AppProps) => {
  switch (props.view) {
    case 'login': return <Login />;
  }
};
