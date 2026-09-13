import { NavLink } from 'react-router'
import { FaFilm, FaHouse, FaTv } from 'react-icons/fa6'

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">
        <FaFilm /> Trending Movies
      </h1>
      <nav className="header__nav">
        <NavLink to="/" end><FaHouse /> Home</NavLink>
        <NavLink to="/movies"><FaFilm /> Filmes</NavLink>
        <NavLink to="/series"><FaTv /> Séries</NavLink>
      </nav>
    </header>
  )
}

export default Header
