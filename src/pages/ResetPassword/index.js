import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
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
    .email('Insira im email válido')
    .required('Este campo é obrigatório.'),
  password: yup
    .string()
    .min(8, 'A senha deve conter no minimo 8 caracteres')
    .max(25, 'A senha deve conter no máximo 25 caracteres')
    .required('Este campo é obrigatório.')
})

const ResetPassword = () => {
  const { token } = useParams()
  const { loading, error, request } = useFetch()
  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async ({ email, password }) => {
    const { response } = await request({
      method: 'post',
      url: '/reset_password',
      data: { email, password, token }
    })
    if (response.status === 200) {
      history.push('/login')
    }
  }

  return (
    <>
      <Head
        title="Redefinir sua senha"
        description="Página de redefinição de senha"
      />
      <section className="section-reset-password">
        <div className="container container-reset-password">
          {error && <p className="error-message">{error.message}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Crie uma senha nova</h2>
            <span>Crie uma senha nova com pelo menos 8 caracteres</span>
            <Input
              label="Confirme seu email"
              type="email"
              name="email"
              placeholder="Digite seu email"
              register={register}
              errors={errors}
              required
            />
            <Input
              label="Nova senha"
              type="password"
              name="password"
              placeholder="Digite a naova senha"
              register={register}
              errors={errors}
              required
              maxLength="25"
            />
            {loading ? (
              <button disabled>Enviando...</button>
            ) : (
              <button>Redefinir</button>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default ResetPassword
