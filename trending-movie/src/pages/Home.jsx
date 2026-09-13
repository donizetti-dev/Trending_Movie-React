import { FaFilm, FaTv } from 'react-icons/fa6'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <main className="home">
      <div className="home__hero">
        <h2 className="home__title">O que está em alta hoje?</h2>
        <p className="home__description">
          Acompanhe os filmes e séries mais populares do dia, atualizados em tempo real
          pela API <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">TMDB</a>.
        </p>
        <div className="home__links">
          <NavLink  className="home__btn" to="/movies"><FaFilm />Ver Filmes</NavLink>
          <NavLink className="home__btn home__btn--secondary"  to="/series"><FaTv />Ver Séries</NavLink>
        </div>
      </div>
    </main>
  )
}

export default Home
