import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import {
  LoginDispatchProps,
  LoginStateProps,
} from './view';
import {
  createSetPasswordAction,
  createSetUserNameAction,
} from '../../reducers/views/login';
import { createLoginAction } from '../../reducers/auth';
import { Dispatch } from '../../reducers';

const mapStateToProps = (state: AppState): LoginStateProps => ({
  error: state.views.login.error,
  isLoggingIn: state.views.login.isLoggingIn,
  password: state.views.login.password,
  userName: state.views.login.userName,
});

const mapDispatchToProps = (dispatch: Dispatch): LoginDispatchProps => ({
  login: (userName: string, password: string) => dispatch(createLoginAction(userName, password)),
  setPassword: (value: string) => dispatch(createSetPasswordAction(value)),
  setUserName: (value: string) => dispatch(createSetUserNameAction(value)),
});

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps);
