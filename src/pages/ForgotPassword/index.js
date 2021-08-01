import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useFetch } from '../../hooks/useFetch'
import Input from '../../components/Input'

import './styles.scss'
import Head from '../../utils/Head'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Este campo é obrigatório.')
})

const ForgotPassword = () => {
  const [isFormSuccess, setIsFormSuccess] = useState(false)
  const { loading, error, request } = useFetch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async ({ email }) => {
    const { response } = await request({
      method: 'post',
      url: '/forgot_password',
      data: { email }
    })

    if (!response) {
      setIsFormSuccess(false)
      return
    }
    setIsFormSuccess(true)
  }

  return (
    <>
      <Head
        title="Redefinir sua senha"
        description="Página de redefinição de senha"
      />
      <section className="section-forgot-password">
        <div className="container container-forgot-password">
          {error && <p className="error-message">{error.message}</p>}
          <form
            className={isFormSuccess ? 'form-disabled' : ''}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2>Esqueceu a senha?</h2>
            <p>Redefina a senha em duas etapas rápidas</p>
            <Input
              type="email"
              name="email"
              placeholder="Digite seu email"
              register={register}
              errors={errors}
              required
            />
            {loading ? (
              <button disabled>Enviando...</button>
            ) : (
              <button>Redefinir Senha</button>
            )}
            <Link to="/login">Voltar</Link>
          </form>
        </div>
        <div className={`message-success ${isFormSuccess ? 'active' : ''}`}>
          <h2>Enviamos um e-mail com instruções para redefinir sua senha</h2>
          <p>
            Se não encontrar o e-mail na sua caixa de entrada, verifique a pasta
            de spam.
          </p>
        </div>
      </section>
    </>
  )
}

export default ForgotPassword
