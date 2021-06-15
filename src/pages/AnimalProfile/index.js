import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSyringe,
  faTablets,
  faUserMd
} from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { AuthContext } from '../../context/AuthContext'
import { useFetch } from '../../hooks/useFetch'

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

const AnimalProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()
  const { userLogged } = useContext(AuthContext)
  const history = useHistory()

  useEffect(() => {
    async function fetchDataAnimal() {
      await request({
        method: 'get',
        url: `/pets/${id}`
      })
    }
    fetchDataAnimal()
  }, [])

  function handleClick() {
    if (!userLogged) {
      history.push('/login')
    }
  }

  const onSubmit = async ({ email, name, telephone }) => {
    console.log({ email, name, telephone })
  }

  if (error) return <p>{error.message}</p>
  if (loading) return <p>Carregando...</p>
  if (data)
    return (
      <section className="section-animal-profile container">
        <div className="wrapper">
          <div className="animal-info">
            <div className="animal-foto">
              <img src={data.foto_url} alt={`Imagem de um ${data.tipo}`} />
            </div>
            <div className="animal-details">
              <div>
                <h3>{data.name}</h3>
                <p className="animal-info-idade">
                  <span>
                    {data.idade > 1
                      ? `${data.idade} anos`
                      : `${data.idade} ano`}
                  </span>
                  <span>{data.sexo === 'M' ? 'Macho' : 'Fêmea'}</span>
                </p>
              </div>

              <p className="animal-description">
                Meu nome é {data.name} e eu adoro brincar. Tudo que eu mais
                quero é encontrar uma família que me ame e importe comigo. Quer
                me adotar?
              </p>
              <div className="info-medical">
                <div className="icon-block">
                  <FontAwesomeIcon icon={faSyringe} />
                  <span>
                    {data.vacinado === 'sim' ? 'Vacinado' : 'Não vacinado'}
                  </span>
                </div>
                <div className="icon-block">
                  <FontAwesomeIcon icon={faTablets} />
                  <span>
                    {data.vermifugado === 'sim'
                      ? 'Vermifugado'
                      : 'Não vermifugado'}
                  </span>
                </div>
                <div className="icon-block">
                  <FontAwesomeIcon icon={faUserMd} />
                  <span>
                    {data.castrado === 'sim' ? 'Castrado' : 'Não castrado'}
                  </span>
                </div>
              </div>
              {!userLogged && <button onClick={handleClick}>Adotar</button>}
            </div>
          </div>

          {userLogged && (
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
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Seu email aqui"
                  name="email"
                  register={register}
                  errors={errors}
                  required
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
                <button>Enviar</button>
              </form>
            </div>
          )}
        </div>
      </section>
    )
  else return null
}

export default AnimalProfile
