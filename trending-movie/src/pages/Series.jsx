import { useState, useEffect } from 'react'
import { FaTv } from 'react-icons/fa6'
import MovieCard from '../components/MovieCard.jsx'

const TMDB_URL   = 'https://api.themoviedb.org/3/trending/tv/day'
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN

function Series() {
  const [series,  setSeries]  = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    fetch(TMDB_URL, {
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
        accept: 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`)
        return res.json()
      })
      .then((data) => {
        setSeries(data.results)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <main className="page">
      <h2 className="page__title"><FaTv /> Séries em Alta Hoje</h2>

      {loading && <p className="status">Carregando...</p>}
      {error   && <p className="status status--error">Erro: {error}</p>}

      {!loading && !error && (
        <div className="grid">
          {series.map((serie) => (
            <MovieCard key={serie.id} {...serie} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Series
