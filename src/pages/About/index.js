import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCreativeCommonsNc } from '@fortawesome/free-brands-svg-icons'
import Head from '../../utils/Head'

import './styles.scss'

const About = () => {
  return (
    <>
      <Head title="About" />
      <section className="about container">
        <h2>Quem somos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
          pretium lectus quam id. Sed augue lacus viverra vitae congue. Erat
          velit scelerisque in dictum non consectetur a erat nam. Tincidunt
          vitae semper quis lectus nulla at volutpat. Ornare suspendisse sed
          nisi lacus sed viverra tellus in hac. Augue eget arcu dictum varius.
          Dis parturient montes nascetur ridiculus mus mauris vitae ultricies.
          Nunc sed velit dignissim sodales ut eu sem integer vitae. Gravida
          rutrum quisque non tellus. Pellentesque diam volutpat commodo sed
          egestas egestas fringilla phasellus.
        </p>
        <p>
          Ut consequat semper viverra nam libero justo laoreet sit amet.
          Pellentesque elit ullamcorper dignissim cras tincidunt. Cursus in hac
          habitasse platea dictumst quisque sagittis. Fermentum et sollicitudin
          ac orci phasellus egestas tellus rutrum. Interdum velit laoreet id
          donec ultrices tincidunt arcu non. Quisque sagittis purus sit amet.
          Ornare aenean euismod elementum nisi quis eleifend quam adipiscing.
          Malesuada bibendum arcu vitae elementum curabitur. In pellentesque
          massa placerat duis ultricies lacus sed turpis. Neque egestas congue
          quisque egestas diam in arcu cursus. Sed felis eget velit aliquet. Ac
          odio tempor orci dapibus ultrices in iaculis nunc. Magnis dis
          parturient montes nascetur ridiculus mus mauris vitae ultricies.
          Faucibus pulvinar elementum integer enim.
        </p>
        <h2>Sobre o projeto Cão sem casa</h2>
        <p>
          Ut consequat semper viverra nam libero justo laoreet sit amet.
          Pellentesque elit ullamcorper dignissim cras tincidunt. Cursus in hac
          habitasse platea dictumst quisque sagittis. Fermentum et sollicitudin
          ac orci phasellus egestas tellus rutrum. Interdum velit laoreet id
          donec ultrices tincidunt arcu non. Magnis dis parturient montes
          nascetur ridiculus mus mauris vitae ultricies. Faucibus pulvinar
          elementum integer enim.
        </p>
        <p>
          Quisque sagittis purus sit amet. Ornare aenean euismod elementum nisi
          quis eleifend quam adipiscing. Malesuada bibendum arcu vitae elementum
          curabitur. In pellentesque massa placerat duis ultricies lacus sed
          turpis. Neque egestas congue quisque egestas diam in arcu cursus. Sed
          felis eget velit aliquet. Ac odio tempor orci dapibus ultrices in
          iaculis nunc.
        </p>
        <p>
          Erat velit scelerisque in dictum non consectetur a erat nam. Tincidunt
          vitae semper quis lectus nulla at volutpat. Ornare suspendisse sed
          nisi lacus sed viverra tellus in hac. Augue eget arcu dictum varius.
          Dis parturient montes nascetur ridiculus mus mauris vitae ultricies.
          Nunc sed velit dignissim sodales ut eu sem integer vitae.
        </p>
        <h2>Valores</h2>
        <div className="container-card">
          <div className="card-valores">
            <FontAwesomeIcon
              icon={faCreativeCommonsNc}
              size="4x"
              color="#706c61"
            />
            <p>Sem fins lucrativos</p>
          </div>
          <div className="card-valores">
            <FontAwesomeIcon icon={faPaw} size="4x" color="#706c61" />
            <p>Foco na adoção e resgate de animais</p>
          </div>
          <div className="card-valores">
            <FontAwesomeIcon icon={faUsers} size="4x" color="#706c61" />
            <p>Conscientização social sobre a vida pet</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
