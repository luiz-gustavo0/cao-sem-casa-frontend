import { useCallback, useState } from 'react'
import api from '../services/api'

const useFetch = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const request = useCallback(async (method, url, data) => {
    let response

    try {
      setError(null)
      setLoading(true)

      response = await api(method, url, data)

      if (response.status !== 200 && response.status !== 201) {
        throw new Error(response)
      }
    } catch (err) {
      console.log('Error', err)
      response = null
      setError(err.response.data.message)
    } finally {
      setLoading(false)
      if (response === null) {
        setData([])
      } else {
        setData(response.data)
      }
      // eslint-disable-next-line no-unsafe-finally
      return { response }
    }
  }, [])

  return {
    data,
    loading,
    error,
    request
  }
}

export { useFetch }
