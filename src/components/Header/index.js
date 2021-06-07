import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

import { ReactComponent as Logo } from '../../assets/logo-header.svg'

import './styles.scss'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { userInfo, logout } = useContext(AuthContext)

  return (
    <header className="header">
      <div className="container header-container">
        <Logo />
        <nav className={`header-menu ${isActive ? 'active' : ''} `}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
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

          {userInfo ? (
            <div className="user-info">
              <span>
                <Link to="/conta">{userInfo.name}</Link>
              </span>
              <button className="btn-logout" onClick={logout}>
                Sair
              </button>
            </div>
          ) : (
            <div className="btn-group">
              <Link to="/login" className="btn-login">
                Entrar
              </Link>
              <Link to="/register" className="btn-cadastrar">
                Cadastrar
              </Link>
            </div>
          )}
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
