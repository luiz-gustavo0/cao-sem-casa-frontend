import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

import Card from '../../components/Card'
import Head from '../../utils/Head'
import Loading from '../../components/Loading'

import './styles.scss'

const Adotar = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const { loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchDataAnimals() {
      const { response } = await request({
        method: 'get',
        url: `/pets?page=${page}`
      })
      setTotalPage(response.headers['x-total-count'])

      setData((prevState) => [...prevState, ...response.data])
    }

    fetchDataAnimals()
  }, [page])

  function handleClick() {
    if (page === totalPage || loading) {
      return
    }

    setPage(Number(page) + 1)
  }

  return (
    <>
      <Head title="Adotar" description="Adote um amigo" />
      <section className="section-adotar container">
        {loading && <Loading />}

        <div className="box-text">
          <h2>Encontre o seu novo amigo</h2>
          <p>
            Temos uma listagem com vários cachorrinhos e gatinhos a procura de
            um novo lar.
          </p>
        </div>

        {error && <p>Ocorreu um erro, Não foi possivel carregar os dados.</p>}
        <div className="cards-container">
          <ul>
            {data &&
              data.map((animalInfo) => (
                <Card key={animalInfo.id} data={animalInfo} />
              ))}
          </ul>
        </div>
        <div className="load-more">
          <button onClick={handleClick}>Carregar mais</button>
        </div>
      </section>
    </>
  )
}

export default Adotar
