import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

import { useFetch } from '../../hooks/useFetch'
import { AuthContext } from '../../context/AuthContext'

import AnimalDetails from '../../components/AnimalDetails'
import Input from '../../components/Input'

import './styles.scss'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Este campo é obrigatório.'),
  name: yup
    .string()
    .min(3, 'O nome deve conter no minimo 3 caracteres')
    .required('Este campo é obrigatorio.'),
  telephone: yup.string().required('Este campo é obrigatorio.')
})

const FinalizarAdocao = () => {
  const [isSuccessSubmitingForm, setIsSuccessSubmitingForm] = useState(false)
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()
  const { userInfo } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    async function fetchDataAnimal() {
      await request({
        method: 'get',
        url: `/pets/${id}`
      })
    }
    fetchDataAnimal()
  }, [])

  const onSubmit = async ({ email, name, telephone }) => {
    console.log({ email, name, telephone })
    setIsSuccessSubmitingForm(!isSuccessSubmitingForm)
  }
  if (error) return <p>{error.message}</p>
  if (loading) return <p>Carregando...</p>
  if (data)
    return (
      <section className="section-finalizar-adocao container">
        <div
          className={`wrapper ${isSuccessSubmitingForm ? 'hide-wrapper' : ''}`}
        >
          <AnimalDetails data={data} page="finalizar-adocao" />

          <div className="form-adocao">
            <h2>Formulário de adoção</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Nome"
                type="text"
                placeholder="Seu nome aqui"
                name="name"
                register={register}
                errors={errors}
                defaultValue={userInfo.name}
                required
              />
              <Input
                label="Email"
                type="email"
                placeholder="Seu email aqui"
                name="email"
                value={userInfo.email}
                register={register}
                errors={errors}
                disabled
                required
              />
              <input
                type="hidden"
                name="email"
                value={userInfo.email}
                {...register('email')}
              />
              <Input
                label="Telefone"
                type="text"
                placeholder="(35) 9999-9999"
                name="telephone"
                register={register}
                errors={errors}
                required
              />
              <button>Confirmar Adoção</button>
            </form>
          </div>
        </div>
        <div
          className={`info-success ${
            isSuccessSubmitingForm ? 'show-info-success' : ''
          }`}
        >
          <div className="box-message">
            <FontAwesomeIcon icon={faCheckSquare} size="7x" color="#35CE8D" />
            <h2>Solicitação enviada com sucesso.</h2>
            <p>Agradecemos seu intereese em adotar este animal.</p>
            <p>
              Em breve enviaremos um email com informações sobre a entrevista de
              adoçao.
            </p>

            <Link to="/">Voltar pra Home</Link>
          </div>
        </div>
      </section>
    )
  else return null
}

export default FinalizarAdocao
