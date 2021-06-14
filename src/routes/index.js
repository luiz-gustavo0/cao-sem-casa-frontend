import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../pages/Home'
import Adotar from '../pages/Adotar'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/adotar" component={Adotar} />
    </Switch>
  )
}

export default Routes
