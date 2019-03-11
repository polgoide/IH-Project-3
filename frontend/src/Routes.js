import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Nuevo from "./components/new/MasterForm"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/nuevo" component={Nuevo} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
)
