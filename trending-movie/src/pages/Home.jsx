function Home() {
  return (
    <main className="home">
        <div className="home__hero">
          <h2 className="home__title">O que está em alta hoje?</h2>
          <p className="home__description">
            Acompanhe os filmes e séries mais populares do dia, atualizados em tempo real
            pela API <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">TMDB</a>.
          </p>
          <div className="home__links">
            <a className="home__btn" href="/movies">🎬 Ver Filmes</a>
            <a className="home__btn home__btn--secondary" href="/series">📺 Ver Séries</a>
          </div>
        </div>
      </main>
  )
}

export default Home
