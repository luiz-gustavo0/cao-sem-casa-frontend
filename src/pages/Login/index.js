import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { AuthContext } from '../../context/AuthContext'
import Input from '../../components/Input'
import Head from '../../utils/Head'

import './styles.scss'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Insira im email válido')
    .required('Este campo é obrigatório.'),
  password: yup
    .string()
    .min(8, 'A senha deve conter no minimo 8 caracteres')
    .required('Este campo é obrigatorio.')
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const { userLogged, login, loading, error } = useContext(AuthContext)

  const onSubmit = async ({ email, password }) => {
    login(email, password)
  }

  if (userLogged)
    return (
      <Redirect
        to={{
          pathname: '/minha-conta'
        }}
      />
    )

  return (
    <>
      <Head title="Login" description="Página de login" />
      <section className="container section-login">
        <div className="box-form">
          <h2>Login</h2>

          {error && <span className="box-form-error">* {error}</span>}

          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Digite seu email"
              register={register}
              errors={errors}
              required
            />
            <Input
              label="Senha"
              type="password"
              name="password"
              placeholder="Digite sua senha"
              register={register}
              errors={errors}
              required
            />

            {loading ? (
              <button disabled>Entrando...</button>
            ) : (
              <button>Entrar</button>
            )}
          </form>
          <div className="box-redirect">
            <Link to="/register">Cadastre-se!</Link>|
            <Link to="/forgot_password">Esqueceu sua senha?</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
