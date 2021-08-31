/* eslint-disable react/prop-types */
import React from 'react'
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {
  const { id, name, sexo, idade, foto_url, description } = data

  return (
    <li className="card-container">
      <div className="box-card-img">
        <img src={foto_url} alt="Imagem" />
      </div>
      <div className="card-info">
        <div className="animal-info">
          <Link to={`/adotar/${id}`}>
            <h3>{name}</h3>
          </Link>

          <span>
            {sexo == 'M' ? (
              <FontAwesomeIcon icon={faMars} size="2x" color="#706C61" />
            ) : (
              <FontAwesomeIcon icon={faVenus} size="2x" color="#E5446D" />
            )}
          </span>
        </div>
        <span
          className="animal-idade"
          style={
            sexo == 'F' ? { background: '#E5446D' } : { background: '#706C61' }
          }
        >
          {idade > 1 ? `${idade} anos` : `${idade} ano`}
        </span>
        <p className="description">{description}</p>
        <Link to={`/animal-profile/${id}`} className="btn-adotar">
          Ver perfil
        </Link>
      </div>
    </li>
  )
}

export default Card
