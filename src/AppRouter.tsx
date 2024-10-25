import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import PrivacyPolicy from "./PrivacyPolicy";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
