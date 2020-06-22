import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn/SignIn";

import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />

      <Route path='/home' component={Home} isPrivate />
      <Route path='/profile' component={Profile} isPrivate />
    </Switch>
  )

}

export default Routes;