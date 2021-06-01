import { useState } from 'react'
import { ReactComponent as Logo } from '../../assets/logo-header.svg'
// import { Link } from 'react-router-dom'

import './styles.scss'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        <Logo />
        <nav className={`header-menu ${isActive ? 'active' : ''} `}>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SOBRE NÓS</a>
            </li>
            <li>
              <a href="#">AJUDAR</a>
            </li>
            <li>
              <a href="#">ADOTAR</a>
            </li>
            <li>
              <a href="#">CONTATO</a>
            </li>
          </ul>
          <div className="btn-group">
            <button className="btn-login">Entrar</button>
            <button className="btn-cadastrar">Cadastrar</button>
          </div>
        </nav>
        <button
          className="btn-mobile"
          onClick={() => setIsActive(!isActive)}
        ></button>
      </div>
    </header>
  )
}

export { Header }
