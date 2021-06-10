import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000'
  // baseURL: 'https://cao-sem-casa-backend.herokuapp.com'
})

export default api
