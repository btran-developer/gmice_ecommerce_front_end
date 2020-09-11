import React from "react";
import { Route, useRouteMatch, useHistory } from "react-router-dom";

import LoginForm from "../../components/login-form/login-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import Routes from "../../routes";

import "./authentication.styles.scss";

const AuthenticationPage = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const signupPath = `${path}${Routes.auth.child.signup}`;
  const loginPath = `${path}${Routes.auth.child.signin}`;
  const shopPath = `${Routes.products.root}`;

  const navigateToShop = () => {
    history.push(shopPath);
  };

  return (
    <div className="authentication-page">
      <div className="authentication-page-background"></div>
      <Route exact path={`${path}`}>
        <div className="authentication-desktop-layout">
          <div className="greeting-message uk-margin-medium-bottom">
            WELCOME TO
            <p className="brand-name">GMice</p>
            <p className="caption">Let your inner gamer emerges with GMice!</p>
            <button
              className="shop-btn uk-button uk-button-large"
              onClick={navigateToShop}
            >
              Shop
            </button>
          </div>
          <div className="login-or-signup">
            <div className="buttons-group">
              <button
                className="signup-btn uk-button uk-button-secondary"
                onClick={() => history.push(signupPath)}
              >
                Create an account
              </button>
              <div className="or">Or</div>
              <button
                className="login-btn uk-button uk-button-primary"
                onClick={() => history.push(loginPath)}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </Route>
      <Route path={loginPath}>
        <LoginForm
          className="form-component uk-position-center"
          signupPath={signupPath}
        />
      </Route>
      <Route path={signupPath}>
        <SignUpForm
          className="form-component uk-position-center"
          loginPath={loginPath}
        />
      </Route>
    </div>
  );
};

export default AuthenticationPage;
