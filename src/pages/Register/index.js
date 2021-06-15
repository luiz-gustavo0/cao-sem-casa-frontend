import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { AuthContext } from '../../context/AuthContext'
import Input from '../../components/Input'

import './styles.scss'
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Register = () => {
  const { login } = useContext(AuthContext)
  const { loading, error, request } = useFetch()

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'O nome deve conter pelo menos 3 caracteres')
      .required(),
    email: yup
      .string()
      .email('Insira im email válido')
      .required('Este campo é obrigatório.'),
    password: yup
      .string()
      .min(8, 'A senha deve conter no minimo 8 caracteres')
      .required('Este campo é obrigatorio.'),
    rua: yup.string().required('Este campo é obrigatório.'),
    numero: yup
      .number('Insira um número inteiro e positivo')
      .positive('Insira um número inteiro e positivo')
      .required('Este campo é obrigatório.'),
    bairro: yup.string().required('Este campo é obrigatório.'),
    cidade: yup.string().required('Este campo é obrigatório.'),
    uf: yup.string().max(2).required('Este campo é obrigatório.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async ({
    name,
    email,
    rua,
    numero,
    bairro,
    cidade,
    uf,
    password
  }) => {
    const formData = {
      name,
      email,
      rua,
      numero,
      bairro,
      cidade,
      uf,
      password
    }

    const { response } = await request({
      method: 'post',
      url: '/users',
      data: formData
    })

    if (response.status !== 201) {
      return
    }

    login(email, password)
  }

  return (
    <section className="section-register container">
      <div className="form-container">
        <h2>Criar uma conta</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            type="text"
            name="name"
            placeholder="Digites seu nome"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Digite seu email"
            register={register}
            errors={errors}
            required
          />
          <div className="form-group">
            <Input
              label="Rua"
              type="text"
              name="rua"
              placeholder="Digite o nome da rua"
              register={register}
              errors={errors}
              required
            />
            <Input
              label="Número"
              type="number"
              name="numero"
              placeholder="Numero"
              min="1"
              register={register}
              errors={errors}
              required
            />
          </div>

          <Input
            label="Bairro"
            type="text"
            name="bairro"
            placeholder="Digite o nome do bairro"
            register={register}
            errors={errors}
            required
          />
          <div className="form-group">
            <Input
              label="Cidade"
              type="text"
              name="cidade"
              placeholder="Digite o nome da cidade"
              register={register}
              errors={errors}
              required
            />
            <Input
              label="UF"
              type="text"
              name="uf"
              placeholder="ex: MG"
              register={register}
              errors={errors}
              required
            />
          </div>

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
            <button disabled>Cadastrando...</button>
          ) : (
            <button>Cadastrar</button>
          )}
        </form>
        <div className="box-redirect-login">
          <Link to="/login">Já tem uma conta? Acesse!</Link>
        </div>
      </div>
      {error && <p>{error}</p>}
    </section>
  )
}

export default Register
