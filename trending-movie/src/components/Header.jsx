import { NavLink } from 'react-router'

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">🎬 Trending Movies</h1>
      <nav className="header__nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/movies">Filmes</NavLink>
        <NavLink to="/series">Séries</NavLink>
      </nav>
    </header>
  )
}

export default Header
