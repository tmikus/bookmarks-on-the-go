import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../reducers';
import {
  LoginDispatchProps,
  LoginStateProps,
} from './view';
import {
  createSetPasswordAction,
  createSetUserNameAction,
} from '../../reducers/views/login';

const mapStateToProps = (state: AppState): LoginStateProps => ({
  isLoggingIn: state.views.login.isLoggingIn,
  password: state.views.login.password,
  userName: state.views.login.userName,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any): LoginDispatchProps => ({
  login: (userName: string, password: string) => {
    console.log('Logging in');
  },
  setPassword: (value: string) => dispatch(createSetPasswordAction(value)),
  setUserName: (value: string) => dispatch(createSetUserNameAction(value)),
});

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps);
