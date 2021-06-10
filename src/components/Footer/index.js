import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as IconFacebbok } from '../../assets/icon-facebook.svg'
import { ReactComponent as IconInstagram } from '../../assets/icon-instagram.svg'
import { ReactComponent as IconTwitter } from '../../assets/icon-twitter.svg'
import { ReactComponent as LogoFooter } from '../../assets/logo-footer.svg'

import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="box-footer-logo">
          <LogoFooter />
        </div>
        <nav className="footer-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre nós</Link>
            </li>
            <li>
              <Link to="/ajudar">Ajudar</Link>
            </li>
            <li>
              <Link to="/adotar">Adotar</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
        <div className="social-link">
          <a href="#">
            <IconFacebbok />
          </a>
          <a href="#">
            <IconInstagram />
          </a>
          <a href="#">
            <IconTwitter />
          </a>
        </div>
      </div>
      <p className="copyright">
        &copy; 2021 Cão sem casa. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
