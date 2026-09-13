import { useState, useEffect } from 'react'
import { FaFilm } from 'react-icons/fa6'
import MovieCard from '../components/MovieCard.jsx'

const TMDB_URL   = 'https://api.themoviedb.org/3/trending/movie/day'
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN

const Movies = () => {
  const [movies,  setMovies]  = useState([])
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
        setMovies(data.results)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <main className="page">
      <h2 className="page__title"><FaFilm /> Filmes em Alta Hoje</h2>

      {loading && <p className="status">Carregando...</p>}
      {error   && <p className="status status--error">Erro: {error}</p>}

      {!loading && !error && (
        <div className="grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Movies
