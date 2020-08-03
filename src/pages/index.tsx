import React, { useEffect, useState } from "react";
import "src/styles/_all.scss";

import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import DebtReminder from "src/components/DebtReminder";
import AddDebtReminder from "src/components/DebtReminder/AddDebtReminder";
import AddMoney from "src/components/Teller/AddMoney";
import HistoryTransactions from "src/components/Admin/HistoryTransactions";
import AllTeller from "src/components/Admin/AllTeller";
import DetailTeller from "src/components/Admin/AllTeller/DetailTeller";
import AddTeller from "src/components/Admin/AllTeller/AddTeller";
import ForgetPassword from "src/components/ForgetPassword";
import ResetPassword from "src/components/ResetPassword";

interface Props {
  isLoading?: boolean;
  isAuthenticated?: boolean;
}

const App: React.FC<Props> = (props) => {
  const [auth, setAuth] = useState(false);



  useEffect(() => {
    console.log("over logout", sessionStorage.getItem("is_authentication"));
    if(sessionStorage.getItem("is_authentication") === "true") {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [props.isAuthenticated])

  return (
    <Router>
      <Header isAuthenticated={auth}/>
      <Switch>
        <PrivateRoute exact={true} path="/" ComposedComp={Top} />
        {/* checked */}
        <Route path="/login">
          <Login />
        </Route>
        {/* checked */}
        <Route path="/forget-password">
          <ForgetPassword />
        </Route>
        {/* checked */}
        <Route path="/reset-password">
          {({ history }) => <ResetPassword history={history} />}
        </Route>
        {/* checked */}
        <Route path="/change-password">
          <ChangePassword />
        </Route>

        <PrivateRoute path="/about" ComposedComp={About} />
        {/* checked */}
        <PrivateRoute path="/transfer" ComposedComp={Transfer} />
        {/* checked */}
        <Route path="/teller/add-customer">
          {({ history }) => <AddCustomer history={history} />}
        </Route>
        {/* checked */}
        <Route path="/teller/add-money-customer">
          {({ history }) => <AddMoney history={history} />}
        </Route>
        {/* checked */}
        <Route path="/teller/customer/detail">
          <CustomerDetail />
        </Route>
        {/* checked */}
        <PrivateRoute path="/teller/customers" ComposedComp={ShowAllCustomers} />
        {/* checked */}
        <PrivateRoute path="/history-transaction" ComposedComp={HistoryTransaction} />
        {/* checked */}
        <PrivateRoute exact={true} path="/debt-reminder" ComposedComp={DebtReminder} />
        {/* checked */}
        <PrivateRoute exact={true} path="/debt-reminder/add" ComposedComp={AddDebtReminder} />
        {/* checked */}
        <PrivateRoute exact={true} path="/my-profile" ComposedComp={CustomerDetail} />
        {/* check, add loading logic */}
        <PrivateRoute path="/admin/history-transaction-interbank" ComposedComp={HistoryTransactions} />
        {/* checked */}
        <PrivateRoute path="/admin/tellers" ComposedComp={AllTeller} />
        {/* checked */}
        <Route path="/admin/teller/detail">
          {({ history }) => <DetailTeller history={history} />}
        </Route>
        {/* checked */}
        <Route path="/admin/teller/add">
          {({ history }) => <AddTeller history={history} />}
        </Route>
        {/* checked */}
        <PrivateRoute path="/reciever" ComposedComp={RecieversManager} /> 
      </Switch>
      <Footer />
      {props.isLoading && <LoadingOverlay />}
    </Router>
  );
};
const mapStateToProps = (state: any) => ({
  isAuthenticated: state.accountState.isAuthenticated,
  isLoading: state.commonState.isLoading,
});

//connect to the appStore
export default connect(mapStateToProps, null)(App);
