import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useFetch } from '../../hooks/useFetch'

import Input from '../Input'

import './styles.scss'
import { AuthContext } from '../../context/AuthContext'

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, 'A senha deve conter no minimo 8 caracteres')
    .required('Este campo é obrigatorio.'),
  password: yup
    .string()
    .min(8, 'A senha deve conter no minimo 8 caracteres')
    .required('Este campo é obrigatorio.')
})

const UpdatePassword = () => {
  const { userInfo } = useContext(AuthContext)
  const { loading, error, request } = useFetch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async ({ newPassword, password }) => {
    await request({
      method: 'put',
      url: `/users/change_password/${userInfo.id}`,
      data: {
        newPassword,
        password
      }
    })
  }

  return (
    <>
      <div className="box-form-update">
        {error && <p className="alterar-senha-error">* {error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Alterar senha</legend>
            <Input
              label="Senha atual"
              type="password"
              name="password"
              placeholder="Senha atual"
              register={register}
              errors={errors}
              required
            />
            <Input
              label="Nova senha"
              type="password"
              name="newPassword"
              placeholder="Nova senha"
              register={register}
              errors={errors}
              required
            />
          </fieldset>
          {loading ? (
            <button disabled>Atualizando...</button>
          ) : (
            <button>Atualizar</button>
          )}
        </form>
      </div>
    </>
  )
}

export default UpdatePassword
