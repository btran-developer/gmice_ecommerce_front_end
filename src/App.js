import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "./components/navbar/navbar.component";
import AuthenticationPage from "./pages/authentication/authentication.component";
import ProductsPage from "./pages/products/products.component";
import CartPage from "./pages/cart/cart.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import ContactUsPage from "./pages/contact-us/contact-us.component";
import NotFoundPage from "./pages/404/not-found.component";
import Footer from "./components/footer/footer.component";

import Routes from "./routes";
import ConditionedRoute from "./components/conditioned-route/conditioned-route.component";

import { setAuth } from "./redux/auth/auth.actions";
import { fetchCart, mergeCarts } from "./redux/cart/cart.actions";

import { AuthContext } from "./contexts/auth.context";

import "./App.scss";

const App = () => {
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const { silentLogin } = useContext(AuthContext);
  const dispatch = useDispatch();
  const handleSetAuth = (auth) => dispatch(setAuth(auth));
  const handleSilentLogin = async (refreshToken) => {
    const response = await silentLogin(refreshToken);

    if (response.status < 400) {
      handleSetAuth(response.data);
    }

    if (response.status === 404) {
      localStorage.removeItem("gmice_refresh_token");
    }
  };
  const handleMergeCart = (fromCartId, toCartId, userId) =>
    dispatch(mergeCarts(fromCartId, toCartId, userId));
  const handleFetchCart = (cartId) => dispatch(fetchCart(cartId));

  useEffect(() => {
    const refreshToken = window.localStorage.getItem("gmice_refresh_token");
    if (refreshToken) {
      handleSilentLogin(refreshToken);
    }
  }, []);

  useEffect(() => {
    let cartId = +window.localStorage.getItem("gmice_cart_id");
    if (auth.isAuthenticated) {
      if (cartId !== auth.user.active_cart_id) {
        // merge cart
        handleMergeCart(cartId, auth.user.active_cart_id, auth.user.user_id);
      } else {
        handleFetchCart(auth.user.active_cart_id);
      }
    } else if (cartId) {
      handleFetchCart(cartId);
    }
  }, [auth]);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Switch>
            <Route
              path={Routes.auth.root}
              exact
              component={AuthenticationPage}
            />
            <Route path={Routes.products.root} component={ProductsPage} />
            <Route path={Routes.cart.root} component={CartPage} />
            {/* <Route path={Routes.checkout.root} component={CheckoutPage} /> */}
            <ConditionedRoute
              path={Routes.checkout.root}
              redirectPath="/not-found"
              conditionToCheck={() => Object.keys(cart).length > 0}
            >
              <CheckoutPage />
            </ConditionedRoute>
            <Route path={Routes.contactUs.root} component={ContactUsPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
