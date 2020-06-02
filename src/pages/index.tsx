import React from "react";
import "src/styles/_all.scss";
import Myfunc from "src/components/example";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "src/components/About";
import Header from 'src/components/commons/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/example">
          <Myfunc title="HUHU" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <h1>Footer</h1>
    </Router>
  );
}

export default App;
