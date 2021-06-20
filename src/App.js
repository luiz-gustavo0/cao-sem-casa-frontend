import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { Header } from './components/Header'
import { AuthProvider } from './context/AuthContext'
import Routes from './routes'
import { ToastProvider } from 'react-toast-notifications'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ToastProvider>
            <Header />
            <main>
              <Routes />
            </main>
            <Footer />
          </ToastProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
