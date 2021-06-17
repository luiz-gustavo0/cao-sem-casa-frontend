import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AnimalDetails from '../../components/AnimalDetails'

import { useFetch } from '../../hooks/useFetch'

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
  if (loading) return <p>Carregando...</p>
  if (data)
    return (
      <section className="section-animal-profile container">
        <div className="wrapper">
          <AnimalDetails data={data} page="animal-profile" />
        </div>
      </section>
    )
  else return null
}

export default AnimalProfile
