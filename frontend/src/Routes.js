import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Nuevo from "./components/new/MasterForm"

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/nuevo" component={Nuevo} />
  </Switch>
)
