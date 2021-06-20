/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSyringe,
  faTablets,
  faUserMd
} from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

const AnimalDetails = ({ data, page }) => {
  return (
    <div className={`animal-profile ${page == 'animal-profile' ? 'xl' : ''}`}>
      <div className="animal-foto">
        <img src={data.foto_url} alt={`Imagem de um ${data.tipo}`} />
      </div>
      <div className="animal-details">
        <div>
          <h3>{data.name}</h3>
          <p className="animal-info-idade">
            <span>
              {data.idade > 1 ? `${data.idade} anos` : `${data.idade} ano`}
            </span>
            <span>{data.sexo === 'M' ? 'Macho' : 'Fêmea'}</span>
          </p>
        </div>

        <p className="animal-description">
          Meu nome é {data.name} e eu adoro brincar. Tudo que eu mais quero é
          encontrar uma família que me ame e importe comigo. Quer me adotar?
        </p>
        <div className="info-medical">
          <div className="icon-block">
            <FontAwesomeIcon icon={faSyringe} />
            <span>{data.vacinado === 'sim' ? 'Vacinado' : 'Não vacinado'}</span>
          </div>
          <div className="icon-block">
            <FontAwesomeIcon icon={faTablets} />
            <span>
              {data.vermifugado === 'sim' ? 'Vermifugado' : 'Não vermifugado'}
            </span>
          </div>
          <div className="icon-block">
            <FontAwesomeIcon icon={faUserMd} />
            <span>{data.castrado === 'sim' ? 'Castrado' : 'Não castrado'}</span>
          </div>
        </div>
        {page == 'animal-profile' && (
          <Link to={`/finalizar-adocao/${data.id}`}>Adotar</Link>
        )}
      </div>
    </div>
  )
}

export default AnimalDetails
