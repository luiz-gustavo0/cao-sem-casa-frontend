/* eslint-disable no-undef */
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useToasts } from 'react-toast-notifications'

import './styles.scss'
import Head from '../../utils/Head'

const Contact = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const { addToast } = useToasts()

  async function sendEmail(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      )

      if (result.status == 200) {
        setUserName('')
        setUserEmail('')
        setMessage('')
        addToast('Mensagem enviada com sucesso', {
          appearance: 'success',
          autoDismiss: true
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error.text)
      addToast(`Não foi possivel enviar sua mensagem \n Error: ${error.text}`, {
        appearance: 'error',
        autoDismiss: true
      })
      setLoading(false)
    }
  }
  return (
    <>
      <Head title="Contato" description="Página de contato" />
      <section className="section-contact container">
        <h2>Contato</h2>

        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="userName">Nome</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            placeholder="Seu nome"
            required
            onChange={(event) => setUserName(event.target.value)}
          />
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={userEmail}
            placeholder="email@example.com"
            required
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <label htmlFor={message}>Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={message}
            placeholder="Mensagem..."
            required
            onChange={(event) => setMessage(event.target.value)}
          />
          {loading ? (
            <button disabled>Enviando...</button>
          ) : (
            <button>Enviar</button>
          )}
        </form>
      </section>
    </>
  )
}

export default Contact
