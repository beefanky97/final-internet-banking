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

  const handleRender = () => {
    if (isAuthenticated) {
      return <ComposedComp />;
    } else {
      alert("Phiên bản đăng nhập hết hạn, xin hãy đăng nhập!");
      return <Redirect to="/login" />;
    }
  };

  return <Route path={path} exact={exact} {...rest} render={() => handleRender()} />;
};

export default PrivateRoute;
