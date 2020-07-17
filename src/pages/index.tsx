import React, { useState, useEffect } from "react";
import "src/styles/_all.scss";

import { connect } from "react-redux";

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
import { LoadingOverlay } from "src/components/commons/Loading";
import ShowAllCustomers from "src/components/Teller/ShowAllCustomers";
import CustomerDetail from "src/components/Teller/CustomerDetail";
import ChangePassword from "src/components/ChangePassword";
import HistoryTransaction from "src/components/HistoryTransaction";

interface Props {
  isLoading?: boolean;
}

const App: React.FC<Props> = (props) => {

  console.log("isLoading!!!!", props.isLoading)
  
  return (
      <Router>
        <Header />
          <PrivateRoute exact={true} path="/" ComposedComp={Top} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/change-password">
            <ChangePassword />
          </Route>
          <PrivateRoute path="/about" ComposedComp={About} />
          <PrivateRoute path="/transfer" ComposedComp={Transfer} />
          <Route path="/teller/add-customer">
            <AddCustomer />
          </Route>
          <Route path="/teller/customer/detail">
            <CustomerDetail />
          </Route>
          <Route path="/teller/customers">
            <ShowAllCustomers />
          </Route>
          <Route path="/admin/history-transaction-interbank">
            <AddCustomer />
          </Route>
          <Route path="/history-transaction">
            <HistoryTransaction />
          </Route>
          <PrivateRoute path="/reciever" ComposedComp={RecieversManager} />
          {props.isLoading && <LoadingOverlay />}
        <Footer />
      </Router>
  );
}
const mapStateToProps = (state: any) => ({
  isLoading: state.commonState.isLoading,
});

//connect to the appStore
export default connect(mapStateToProps, null)(App);
