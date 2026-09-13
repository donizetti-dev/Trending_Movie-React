import { FaStar } from 'react-icons/fa6'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

function MovieCard({ title, name, poster_path, vote_average, release_date, first_air_date }) {
  const displayTitle = title || name
  const displayDate  = release_date || first_air_date

  return (
    <div className="card">
      {poster_path ? (
        <img
          className="card__poster"
          src={`${IMAGE_BASE_URL}${poster_path}`}
          alt={`Poster de ${displayTitle}`}
        />
      ) : (
        <div className="card__poster card__poster--placeholder">
          <span>Sem imagem</span>
        </div>
      )}
      <div className="card__info">
        <h3 className="card__title">{displayTitle}</h3>
        <p className="card__rating"><FaStar /> {vote_average?.toFixed(1)}</p>
        {displayDate && (
          <p className="card__date">{new Date(displayDate).getFullYear()}</p>
        )}
      </div>
    </div>
  )
}

export default MovieCard
