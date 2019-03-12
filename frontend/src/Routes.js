import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Detail from "./components/Detail"
import Nuevo from "./components/new/MasterForm"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Logout from "./components/auth/Logout"
import List from "./components/List"

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/nuevo" component={Nuevo} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/logout" component={Logout} />
    <Route path="/trabajo/:id" component={Detail} />
    <Route path="/trabajos/" component={List} />
  </Switch>
)
