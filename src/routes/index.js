import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  )
}

export default Routes
