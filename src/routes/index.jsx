import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn/SignIn";

import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import StudentTrainings from "../pages/StudentTrainings/StudentTrainings";
import CreateTraining from "../pages/Training/Create/CreateTraining";

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />

      <Route path='/home' component={Home} isPrivate />
      <Route path='/profile' component={Profile} isPrivate />
      <Route path='/trainings/create' component={CreateTraining} isPrivate />
      <Route path='/trainings/:studentId' exact component={StudentTrainings} isPrivate />
      <Route path='/trainings/:studentId/create' component={CreateTraining} isPrivate />

      {/* <Redirect to='/home' /> */}
    </Switch>
  )

}

export default Routes;