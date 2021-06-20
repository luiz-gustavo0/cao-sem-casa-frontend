import React, { useEffect } from 'react'
import { createContext, useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router-dom'
import api from '../services/api'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null)
  const [userLogged, setUserLogged] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const location = useLocation()

  const history = useHistory()

  useEffect(() => {
    setLoading(true)
    setError(null)

    const storagedToken = localStorage.getItem('@App:token')
    const sotragedUser = localStorage.getItem('@App:user')

    if (storagedToken && sotragedUser) {
      setUserInfo(JSON.parse(sotragedUser))
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`
      setUserLogged(true)
    }
    setLoading(false)
  }, [])

  async function login(email, password) {
    try {
      setError(null)
      setLoading(true)

      const response = await api.post('/auth', { email, password })

      if (response.status !== 200) {
        throw new Error(response)
      }

      const { token, user } = response.data

      localStorage.setItem('@App:token', token)
      localStorage.setItem('@App:user', JSON.stringify(user))

      api.defaults.headers.Authorization = `Bearer ${token}`

      setUserInfo(user)
      setUserLogged(true)

      let { from } = location.state || { from: { pathname: '/' } }
      history.replace(from)
    } catch (err) {
      setError(err.response?.data.message)
      setUserLogged(false)
    } finally {
      setLoading(false)
    }
  }

  const logout = useCallback(() => {
    setUserInfo(null)
    setError(null)
    setLoading(false)
    setUserLogged(false)

    localStorage.removeItem('@App:token')
    localStorage.removeItem('@App:user')
    history.push('/')
  }, [history])

  return (
    <AuthContext.Provider
      value={{ login, logout, userInfo, error, loading, userLogged }}
    >
      {children}
    </AuthContext.Provider>
  )
}
