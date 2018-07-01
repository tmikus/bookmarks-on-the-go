import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../reducers';
import {
  AppDispatchProps,
  AppStateProps,
} from './view';

const mapStateToProps = (state: AppState): AppStateProps => ({
  isAuthenticated: state.auth.isLoggedIn,
  view: state.navigation.view,
});

const mapDispatchToProps = (dispatch: Dispatch): AppDispatchProps => ({

});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps);
