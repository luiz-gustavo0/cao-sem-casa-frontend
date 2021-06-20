import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch'
import ongMembersImg from '../../assets/img-ong-members.png'
import heroImg from '../../assets/hero.png'
import Card from '../../components/Card'
import Head from '../../utils/Head'

import './styles.scss'

const Home = () => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchDataAnimals() {
      await request({
        method: 'get',
        url: '/pets'
      })
    }

    fetchDataAnimals()
  }, [])

  return (
    <>
      <Head title="Home" description="Página inicial" />
      <section className="section-hero container">
        <div className="box-principal">
          <h1>Adote, não compre.</h1>
          <p>
            Adote um novo melhor amigo aqui e tenha uma vida repleta de amor
            todos os dias.
          </p>
          <Link to="/register" className="btn-register">
            Cadastre-se
          </Link>
        </div>
        <div className="box-img">
          <img src={heroImg} alt="Imagem" />
        </div>
      </section>

      <section className="section-about ">
        <div className="about-container container ">
          <div className="box-about-img">
            <img src={ongMembersImg} alt="Imagem" />
          </div>
          <div className="box-about-text">
            <h2>Quem somos</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              id rem nobis consectetur optio sit porro iusto, ratione, eos in,
              praesentium dolore tempore nisi quidem veniam debitis sapiente et
              voluptates.
            </p>
          </div>
        </div>
      </section>

      <section className="section-animals container">
        <div className="box-heading">
          <h2>Disponíveis para adoção</h2>
          <Link to="/adocao">Ver lista completa &#129042;</Link>
        </div>

        {loading && <p>Carregando...</p>}
        {error && <p>Ocorreu um erro, tente novamente mais tarde.</p>}
        <div className="box-cards-animals">
          <ul>
            {data &&
              data.map((animalInfo) => (
                <Card key={animalInfo.id} data={animalInfo} />
              ))}
          </ul>
        </div>
      </section>
      <section className="section-contribute">
        <div className="box-text container">
          <h2>Nos ajudem a continuar resgatando</h2>
          <p>
            Se você doar qualquer valor para a instituição, vamos continuar
            resgatando e assim encontrar um novo lar para nosos amigos que vão
            poder ter uma casinha e um dono que o ame para chamar de seu.
          </p>
          <Link to="ajudar">Saiba mais</Link>
        </div>
      </section>
    </>
  )
}

export default Home
