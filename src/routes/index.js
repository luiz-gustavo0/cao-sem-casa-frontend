import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../pages/Home'
import Adotar from '../pages/Adotar'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AnimalProfile from '../pages/AnimalProfile'
import FinalizarAdocao from '../pages/FinalizarAdocao'
import PrivateRoute from '../components/PrivateRoute'
import Contact from '../pages/Contact'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/adotar" component={Adotar} />
      <Route path="/animal-profile/:id" component={AnimalProfile} />
      <Route path="/contact" component={Contact} />
      <PrivateRoute path="/finalizar-adocao/:id">
        <FinalizarAdocao />
      </PrivateRoute>
      {/* <Route path="/finalizar-adocao/:id" component={FinalizarAdocao} /> */}
    </Switch>
  )
}

export default Routes
