import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "src/app/context/auth";

interface Props {
  ComposedComp: any;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<Props> = ({ ComposedComp, path, exact, ...rest }) => {
  const isAuthenticated = useAuth();
  console.log("over");
  return (
    <Route
    path={path}
    //Just redirect when correct path only
    exact={exact}
    { ...rest }
      render={() =>
        isAuthenticated ? <ComposedComp /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
