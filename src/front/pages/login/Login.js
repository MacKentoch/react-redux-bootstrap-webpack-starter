// @flow

// #region imports
import React, { useState, useEffect } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import auth from '../../services/auth';
import { type UserAuthActions } from '../../types/redux/userAuth';
// #endregion

// #region flow types
export type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  // userAuth:
  isAuthenticated: boolean,
  isFetching: boolean,
  isLogging: boolean,
} & UserAuthActions;
// #endregion

function Login({
  isLogging,
  isFetching,
  disconnectUser,
  logUserIfNeeded,
  history,
}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(
    () => {
      // on mount disconnect (clear previous user auth and info):
      disconnectUser();
    },
    () => {},
  );

  // #region form inputs change callbacks
  const handlesOnEmailChange = (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
      setEmail(event.target.value.trim());
    }
  };

  const handlesOnPasswordChange = (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
      setPassword(event.target.value.trim());
    }
  };
  // #endregion

  // #region on login button click callback
  const handlesOnLogin = async (event: SyntheticEvent<>) => {
    event && event.preventDefault();

    const userLogin = {
      login: email,
      password: password,
    };

    try {
      const response = await logUserIfNeeded(userLogin);
      const {
        data: { token, user },
      } = response.payload;

      auth.setToken(token);
      auth.setUserInfo(user);

      history.push({ pathname: '/' }); // back to Home
    } catch (error) {
      /* eslint-disable no-console */
      console.log('login went wrong..., error: ', error);
      /* eslint-enable no-console */
    }
  };
  // #endregion

  // #region on go back home button click callback
  const goHome = (event: SyntheticEvent<>) => {
    event && event.preventDefault();
    history.push({ pathname: '/' });
  };
  // #endregion

  return (
    <div className="content">
      <Row>
        <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
          <form className="form-horizontal" noValidate>
            <fieldset>
              <legend>Login</legend>
              <div className="form-group">
                <label htmlFor="inputEmail" className="col-lg-2 control-label">
                  Email
                </label>
                <Col lg={12}>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email"
                    autoComplete="username email"
                    value={email}
                    onChange={handlesOnEmailChange}
                  />
                </Col>
              </div>

              <div className="form-group">
                <label
                  htmlFor="inputPassword"
                  className="col-lg-2 control-label"
                >
                  Password
                </label>
                <Col lg={12}>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlesOnPasswordChange}
                  />
                </Col>
              </div>

              <div className="form-group">
                <Col lg={{ size: 12 }}>
                  <Button
                    className="login-button btn-block"
                    color="primary"
                    disabled={isLogging}
                    onClick={handlesOnLogin}
                  >
                    {isLogging ? (
                      <span>
                        login in... &nbsp;
                        <i className="fa fa-spinner fa-pulse fa-fw" />
                      </span>
                    ) : (
                      <span>Login</span>
                    )}
                  </Button>
                </Col>
              </div>
            </fieldset>
          </form>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
          <div className="pull-right">
            <Button className="btn-block" onClick={goHome}>
              back to home
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

Login.defaultProps = {
  isFetching: false,
  isLogging: false,
};

Login.displayName = 'Login';

export default Login;
