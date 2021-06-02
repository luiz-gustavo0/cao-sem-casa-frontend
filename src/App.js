import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { AuthProvider } from './context/AuthContext'
import Routes from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
