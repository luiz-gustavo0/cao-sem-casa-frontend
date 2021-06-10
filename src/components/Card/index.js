/* eslint-disable react/prop-types */
import React from 'react'
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

const Card = ({ data }) => {
  const { name, sexo, idade, foto_url } = data

  return (
    <li className="card-container">
      <div className="box-card-img">
        <img src={foto_url} alt="Imagem" />
      </div>
      <div className="card-info">
        <div className="animal-info">
          <h3>{name}</h3>

          <span>
            {sexo == 'M' ? (
              <FontAwesomeIcon icon={faVenus} size="2x" color="#E5446D" />
            ) : (
              <FontAwesomeIcon icon={faMars} size="2x" color="#706C61" />
            )}
          </span>
        </div>
        <span
          className="animal-idade"
          style={
            sexo == 'M' ? { background: '#E5446D' } : { background: '#706C61' }
          }
        >
          {idade > 1 ? `${idade} anos` : `${idade} ano`}
        </span>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nemo
          fuga, dicta quae dolorum dolor deleniti earum vitae.
        </p>
        <button className="btn-adotar">Adotar</button>
        {/* <Link to="adotar" className="btn-adotar">
          Adotar
        </Link> */}
      </div>
    </li>
  )
}

export default Card
