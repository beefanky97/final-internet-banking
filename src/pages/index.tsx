import React from "react";
import "src/styles/_all.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "src/components/About";
import Header from "src/components/commons/Header";
import Footer from "src/components/commons/Footer";

import Myfunc from "src/components/example";
import Login from "src/components/Login";
import Top from "src/components/Top";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Top />
        </Route>
        <Route path="/example">
          <Myfunc title="HUHU" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
