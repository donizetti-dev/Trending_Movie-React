import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { FaStar, FaArrowLeft } from 'react-icons/fa6'

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const Detail = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [item,    setItem]    = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  const endpoint = props.mediaType === 'movie'
    ? `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`
    : `https://api.themoviedb.org/3/tv/${id}?language=pt-BR`

  useEffect(() => {
    fetch(endpoint, {
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
        setItem(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <main className="page"><p className="status">Carregando...</p></main>
  if (error)   return <main className="page"><p className="status status--error">Erro: {error}</p></main>

  const title = item.title || item.name
  const date = item.release_date || item.first_air_date
  const year = date ? new Date(date).getFullYear() : '—'
  const runtime = item.runtime || item.episode_run_time?.[0]

  return (
    <main className="detail">
      <button className="detail__back" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Voltar
      </button>

      <div className="detail__content">
        {item.poster_path ? (
          <img
            className="detail__poster"
            src={`${IMAGE_BASE_URL}${item.poster_path}`}
            alt={`Poster de ${title}`}
          />
        ) : (
          <div className="detail__poster detail__poster--placeholder">
            <span>Sem imagem</span>
          </div>
        )}

        <div className="detail__info">
          <h2 className="detail__title">{title}</h2>

          <div className="detail__meta">
            <span className="detail__rating">
              <FaStar /> {item.vote_average?.toFixed(1)}
            </span>
            <span className="detail__year">{year}</span>
            {runtime && <span className="detail__runtime">{runtime} min</span>}
          </div>

          {item.genres?.length > 0 && (
            <div className="detail__genres">
              {item.genres.map((genre) => (
                <span key={genre.id} className="detail__genre">{genre.name}</span>
              ))}
            </div>
          )}

          {item.overview && (
            <p className="detail__overview">{item.overview}</p>
          )}
        </div>
      </div>
    </main>
  )
}

export default Detail
