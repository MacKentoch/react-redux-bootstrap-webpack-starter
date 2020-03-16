import React, { useState, useEffect, useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import auth from '../../services/auth';
import FadeInEntrance from '../../components/fadeInEntrance';
import { MappedDispatchToProps, MappedStateToProps, OwnProps } from './index';

// #region types
export type Props = RouteComponentProps &
  MappedStateToProps &
  MappedDispatchToProps &
  OwnProps;
// #endregion

function Login({
  location,
  isLogging,
  isFetching,
  disconnectUser,
  logUserIfNeeded,
  history,
}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // on mount disconnect (clear previous user auth and info):
    disconnectUser();
  }, []);

  // #region form inputs change callbacks
  const handlesOnEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event) {
        event.preventDefault();
        setEmail(event.target.value.trim());
      }
    },
    [],
  );

  const handlesOnPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event) {
        event.preventDefault();
        setPassword(event.target.value.trim());
      }
    },
    [],
  );
  // #endregion

  // #region on login button click callback
  const handlesOnLogin = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event && event.preventDefault();

      try {
        const response = await logUserIfNeeded(email, password);
        const {
          data: { token, user },
        } = response.payload;

        auth.setToken(token);
        auth.setUserInfo(user);

        // @ts-ignore
        const { from } = location.state || { from: { pathname: '/' } };

        history.replace(from); // back to Home
      } catch (error) {
        /* eslint-disable no-console */
        console.log('login went wrong..., error: ', error);
        /* eslint-enable no-console */
      }
    },
    [history, location, email, password],
  );
  // #endregion

  // #region on go back home button click callback
  const goHome = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event && event.preventDefault();
      history.push({ pathname: '/' });
    },
    [history],
  );
  // #endregion

  return (
    <FadeInEntrance>
      <div className="content">
        <Row>
          <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <form className="form-horizontal" noValidate>
              <fieldset>
                <legend>Login</legend>
                <div className="form-group">
                  <label
                    htmlFor="inputEmail"
                    className="col-lg-2 control-label"
                  >
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
    </FadeInEntrance>
  );
}

Login.defaultProps = {
  isFetching: false,
  isLogging: false,
};

Login.displayName = 'Login';

export default Login;
