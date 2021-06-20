import axios from 'axios'

const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_LINK_API
})

export default api
