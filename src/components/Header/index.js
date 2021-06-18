import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

import { ReactComponent as Logo } from '../../assets/logo-header.svg'

import './styles.scss'

const Header = () => {
  const { userInfo, logout } = useContext(AuthContext)
  const [isActive, setIsActive] = useState(false)
  const [openDopdown, setOpenDopdown] = useState(false)

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
              <Link to="/adotar">ADOTAR</Link>
            </li>
            <li>
              <a href="contact">CONTATO</a>
            </li>
          </ul>

          {userInfo ? (
            <div className="user-info">
              <span onClick={() => setOpenDopdown(!openDopdown)}>
                {userInfo.name.substr(0, 1)}
              </span>
              <div
                className={`dropdown ${openDopdown ? 'dropdown-active' : ''}`}
              >
                <Link to="/conta">Minha conta</Link>
                <button className="btn-logout" onClick={logout}>
                  Sair
                </button>
              </div>
            </div>
          ) : (
            <div className="btn-group">
              <Link to="/login" className="btn-login">
                Entrar
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
