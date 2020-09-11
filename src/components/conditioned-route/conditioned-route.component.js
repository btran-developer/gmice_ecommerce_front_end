import React from "react";
import { Route, Redirect } from "react-router-dom";

const ConditionedRoute = ({
  conditionToCheck,
  exact,
  path,
  redirectPath,
  children,
}) => {
  console.log(conditionToCheck());
  if (conditionToCheck()) {
    return (
      <Route exact={exact} path={path}>
        {children}
      </Route>
    );
  } else {
    return <Redirect to={redirectPath} />;
  }
};

export default ConditionedRoute;
