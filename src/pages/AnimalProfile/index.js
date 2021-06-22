import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch'
import AnimalDetails from '../../components/AnimalDetails'
import Loading from '../../components/Loading'
import Head from '../../utils/Head'

import './styles.scss'

const AnimalProfile = () => {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchDataAnimal() {
      await request({
        method: 'get',
        url: `/pets/${id}`
      })
    }
    fetchDataAnimal()
  }, [])

  if (error) return <p>{error.message}</p>
  if (data)
    return (
      <>
        <Head title={data.name} description="Página de perfil do animal" />
        <section className="section-animal-profile container">
          {loading && <Loading />}
          <div className="wrapper">
            <AnimalDetails data={data} page="animal-profile" />
          </div>
        </section>
      </>
    )
  else return null
}

export default AnimalProfile
