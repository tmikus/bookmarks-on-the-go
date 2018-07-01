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
import { createLoginAction } from '../../reducers/auth';

const mapStateToProps = (state: AppState): LoginStateProps => ({
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
