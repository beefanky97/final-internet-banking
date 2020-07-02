import React, { useState, useEffect } from "react";
import "src/styles/_all.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "src/components/About";
import Header from "src/components/commons/Header";
import Footer from "src/components/commons/Footer";

import Login from "src/components/Login";
import Top from "src/components/Top";
import PrivateRoute from "src/components/hocs/PrivateRoute";
import Transfer from "src/components/Transfer";
import AddCustomer from "src/components/Teller/AddCustomer";
import RecieversManager from "src/components/RecieversManager";

function App() {
  
  return (
      <Router>
        <Header />
          <PrivateRoute exact={true} path="/" ComposedComp={Top} />
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/about" ComposedComp={About} />
          <PrivateRoute path="/transfer" ComposedComp={Transfer} />
          <Route path="/teller/add-customer">
            <AddCustomer />
          </Route>
          <Route path="/admin/history-transaction-interbank">
            <AddCustomer />
          </Route>
          <PrivateRoute path="/reciever" ComposedComp={RecieversManager} />
        <Footer />
      </Router>
  );
}

export default App;
