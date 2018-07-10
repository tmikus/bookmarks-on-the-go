import { connect } from 'react-redux';
import { AppState, Dispatch } from '../../reducers';
import {
  AppDispatchProps,
  AppStateProps,
} from './view';

const mapStateToProps = (state: AppState): AppStateProps => ({
  view: state.navigation.view,
});

const mapDispatchToProps = (dispatch: Dispatch): AppDispatchProps => ({
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps);
