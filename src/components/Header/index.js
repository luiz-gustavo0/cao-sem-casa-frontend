import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

import { ReactComponent as Logo } from '../../assets/logo-header.svg'

import './styles.scss'

const Header = () => {
  const { userInfo, logout } = useContext(AuthContext)
  const [isActive, setIsActive] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleClick = () => {
    setOpenDropdown(!openDropdown)
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Logo />
        <nav className={`header-menu ${isActive ? 'active' : ''} `}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsActive(!isActive)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsActive(!isActive)}>
                SOBRE NÓS
              </Link>
            </li>

            <li>
              <Link to="/adotar" onClick={() => setIsActive(!isActive)}>
                ADOTAR
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsActive(!isActive)}>
                CONTATO
              </Link>
            </li>
          </ul>

          {userInfo ? (
            <div className="user-info">
              <span onClick={handleClick}>{userInfo.name.substr(0, 1)}</span>
              <div
                className={`dropdown ${openDropdown ? 'dropdown-active' : ''}`}
              >
                <Link to="/minha-conta" onClick={() => setIsActive(!isActive)}>
                  Minha conta
                </Link>
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
