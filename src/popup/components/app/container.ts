import { connect } from 'react-redux';
import { AppState, Dispatch } from '../../reducers';
import {
  AppDispatchProps,
  AppStateProps,
} from './view';
import { createInitialiseAppAction } from '../../reducers/views/app';

const mapStateToProps = (state: AppState): AppStateProps => ({
  isAuthenticated: state.auth.isLoggedIn,
  isInitialised: state.views.app.isInitialised,
  isInitialising: state.views.app.isInitialising,
  view: state.navigation.view,
});

const mapDispatchToProps = (dispatch: Dispatch): AppDispatchProps => ({
  initialise: () => dispatch(createInitialiseAppAction()),
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps);
