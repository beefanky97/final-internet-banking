import React, { useState, useEffect } from "react";
import "src/styles/_all.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "src/components/About";
import Header from "src/components/commons/Header";
import Footer from "src/components/commons/Footer";

import Login from "src/components/Login";
import Top from "src/components/Top";
import PrivateRoute from "src/components/hocs/PrivateRoute";

import { AuthContext } from "src/app/context/auth";
import { isValidToken } from "src/components/utils/functions";

function App() {
  //Get token
  const [isAuthenticated, setIsAuth] = useState(true);

  useEffect(() => {
    setIsAuth(isValidToken());
  }, [])
  
  return (
    <AuthContext.Provider value={ isAuthenticated }>
      <Router>
        <Header />
          <PrivateRoute exact={true} path="/" ComposedComp={Top} />
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact={false} path="/about" ComposedComp={About} />
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
