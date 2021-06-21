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
import Account from '../pages/Account'
import About from '../pages/Aobout'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/adotar" component={Adotar} />
      <Route path="/animal-profile/:id" component={AnimalProfile} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <PrivateRoute path="/finalizar-adocao/:id">
        <FinalizarAdocao />
      </PrivateRoute>
      <PrivateRoute path="/minha-conta">
        <Account />
      </PrivateRoute>
    </Switch>
  )
}

export default Routes
