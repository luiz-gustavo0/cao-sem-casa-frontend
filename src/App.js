import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
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
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
