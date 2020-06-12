import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isValidToken } from "src/components/utils/functions";

interface Props {
  ComposedComp: any;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<Props> = ({ ComposedComp, path, exact = false, ...rest }) => {

  const isAuthenticated = isValidToken();

  return (
    <Route
    path={path}
    exact={exact}
    { ...rest }
      render={() =>
        isAuthenticated ? <ComposedComp /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
