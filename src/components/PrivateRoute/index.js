import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, ...rest }) => {
  const { userLogged } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
