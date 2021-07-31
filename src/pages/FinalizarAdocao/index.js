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
import Loading from '../../components/Loading'
import Head from '../../utils/Head'

import './styles.scss'

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'O nome deve conter no minimo 3 caracteres')
    .required('Este campo é obrigatorio.'),
  email: yup
    .string()
    .email(
      'Digite um email válido',
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
})

const FinalizarAdocao = () => {
  const [isSuccessSubmitingForm, setIsSuccessSubmitingForm] = useState(false)
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()
  const { userInfo } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    setValue,
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

  useEffect(() => {
    if (userInfo) {
      setValue('name', userInfo.name)
      setValue('email', userInfo.email)
    }
  }, [setValue, userInfo])

  const onSubmit = async ({ email, name }) => {
    const { response } = await request({
      method: 'post',
      url: '/adoption',
      data: {
        animalId: id,
        email,
        name
      }
    })
    console.log(response)
    setIsSuccessSubmitingForm(!isSuccessSubmitingForm)
  }

  if (loading) return <Loading />
  return (
    <>
      <Head title="Finalizar adoção" description="Página de finalizar adoção" />
      <section className="section-finalizar-adocao container">
        <div
          className={`wrapper ${isSuccessSubmitingForm ? 'hide-wrapper' : ''}`}
        >
          <AnimalDetails data={data} page="finalizar-adocao" />

          <div className="form-adocao">
            {error && <p>{error}</p>}
            <h2>Formulário de adoção</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Nome"
                type="text"
                placeholder="Seu nome aqui"
                name="name"
                register={register}
                errors={errors}
                required
              />
              <Input
                label="Email"
                name="email"
                type="email"
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
    </>
  )
}

export default FinalizarAdocao
