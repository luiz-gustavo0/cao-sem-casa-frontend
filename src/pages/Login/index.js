import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import heroImage from '../../assets/hero.png'

import './styles.scss'
import { AuthContext } from '../../context/AuthContext'

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

  const { login } = useContext(AuthContext)

  const onSubmit = async ({ email, password }) => {
    login(email, password)
  }

  return (
    <section className="container section-login">
      <div className="box-image">
        <img src={heroImage} alt="Imagem de um homem com um cachorro" />
      </div>
      <div className="box-form">
        <h2>Entrar</h2>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input type="email" {...register('email')} />
          <p>{errors.email?.message}</p>
          <input type="password" {...register('password')} />
          <p>{errors.password?.message}</p>

          <button>Entrar</button>
        </form>
      </div>
    </section>
  )
}

export default Login
