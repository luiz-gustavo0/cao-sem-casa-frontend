import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useToasts } from 'react-toast-notifications'

import { AuthContext } from '../../context/AuthContext'
import { useFetch } from '../../hooks/useFetch'

import Input from '../../components/Input'
import UpdatePassword from '../../components/UpdatePassword'
import Head from '../../utils/Head'

import './styles.scss'
import Loading from '../../components/Loading'

const schema = yup.object().shape({
  name: yup.string().required('Este campo é obrigatorio.'),
  email: yup.string().required('Este campo é obrigatorio.'),
  telephone: yup.string().required('Este campo é obrigatorio.'),
  rua: yup.string().required('Este campo é obrigatorio.'),
  numero: yup.number().required('Este campo é obrigatorio.'),
  bairro: yup.string().required('Este campo é obrigatorio.'),
  cidade: yup.string().required('Este campo é obrigatorio.'),
  uf: yup.string().max(2).required('Este campo é obrigatorio.')
})

const Account = () => {
  const [isFormSentSuccess, setIsFormSentSuccess] = useState(false)
  const { userInfo } = useContext(AuthContext)
  const { data, loading, error, request } = useFetch()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const { addToast } = useToasts()

  const onSubmit = async ({
    name,
    email,
    rua,
    bairro,
    numero,
    cidade,
    uf,
    telephone
  }) => {
    const formData = {
      name,
      email,
      rua,
      numero,
      bairro,
      cidade,
      uf,
      telephone
    }

    const { response } = await request({
      method: 'put',
      url: `/users/${userInfo.id}`,
      data: formData
    })

    if (!response) {
      addToast('Não foi possível atualizar os dados.', {
        appearance: 'error',
        autoDismiss: true
      })
      return
    }

    addToast('Dados atualizados com sucesso', {
      appearance: 'success',
      autoDismiss: true
    })

    setIsFormSentSuccess(true)
  }

  useEffect(() => {
    async function getDataUser() {
      await request({
        method: 'get',
        url: `/users/${userInfo.id}`
      })
    }

    getDataUser()
    setIsFormSentSuccess(false)
  }, [isFormSentSuccess])

  useEffect(() => {
    if (data) {
      setValue('name', data.name)
      setValue('email', data.email)
      setValue('rua', data.rua)
      setValue('bairro', data.bairro)
      setValue('numero', data.numero)
      setValue('cidade', data.cidade)
      setValue('uf', data.uf)
      setValue('telephone', data.telephone)
    }
  }, [data])

  if (error) return <p>{error}</p>

  return (
    <>
      <Head title="Minha conta" description="Página minha conta" />
      <section className="section-account container">
        {loading && <Loading />}
        <h2>Minha Conta</h2>
        <div className="wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend>Contato</legend>
              <Input
                label="Nome"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                register={register}
                errors={errors}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Digite seu email"
                register={register}
                errors={errors}
                disabled
              />
              <Input
                label="Telefone"
                type="tel"
                name="telephone"
                placeholder="(00) 9999-9999"
                register={register}
                errors={errors}
              />
            </fieldset>
            <fieldset>
              <legend>Endereço</legend>
              <div className="form-group">
                <Input
                  label="Rua"
                  type="text"
                  name="rua"
                  placeholder="Digite o nome da rua"
                  register={register}
                  errors={errors}
                />
                <Input
                  label="Número"
                  type="number"
                  name="numero"
                  placeholder="Numero"
                  min="1"
                  register={register}
                  errors={errors}
                />
              </div>

              <Input
                label="Bairro"
                type="text"
                name="bairro"
                placeholder="Digite o nome do bairro"
                register={register}
                errors={errors}
              />
              <div className="form-group">
                <Input
                  label="Cidade"
                  type="text"
                  name="cidade"
                  placeholder="Digite o nome da cidade"
                  register={register}
                  errors={errors}
                />
                <Input
                  label="UF"
                  type="text"
                  name="uf"
                  placeholder="ex: MG"
                  register={register}
                  errors={errors}
                />
              </div>
            </fieldset>
            <button>Salvar</button>
          </form>
          <UpdatePassword />
        </div>
      </section>
    </>
  )
}

export default Account
