import { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await fetch('/api/message')
        const data = await res.json()
          setData(data)
          setLoading(false)
      } catch (err) {
        setError(true)
        console.log(err.message)
      }
    }
    getMessage()
  }, [])

  if (loading) return <p data-testid='loading'>Loading...</p>
  if (error) return <p data-testid='error'>Error loading</p>

  return <h1 data-testid='helloWorld'>{data?.message}</h1>
}

export default App
