# Trending-Movies — Plano de Implementação (Final)

**Raiz:** `C:\React\Trending_Movie-React\Trending-Movie`
**Stack:** React 19 + Vite 8 + React Router v7 + TMDB API
**CSS:** Global em `index.css` | **Auth:** `.env` | **Hooks:** `useState` + `useEffect`

---

## Design — Versão Simplificada

Inspirado em design escuro de streaming (referência: MovieGather), adaptado para simplicidade.

### Tema
- Fundo geral: escuro (`#121212` ou similar)
- Fundo do Header: preto semitransparente
- Texto principal: branco / cinza claro
- Destaque/acento: laranja ou amarelo (cor de rating)

### Header
- Fundo escuro, largura total
- Logo à esquerda: texto "🎬 Trending Movies"
- Navegação à direita: links Home, Filmes, Séries
- Link ativo com sublinhado ou cor de destaque

### Cards (`MovieCard`)
- Poster em tamanho fixo (largura ~200px), bordas arredondadas
- Título do filme/série abaixo do poster
- Nota com ícone ⭐ abaixo do título
- Fundo do card levemente mais claro que o fundo geral
- Hover: leve elevação (escala ou sombra)

### Layout das Páginas (Movies / Series)
- Grid responsivo de cards (3–4 colunas em desktop)
- Título da seção acima do grid (ex: "Filmes em Alta Hoje")

### Fora do escopo visual (não implementar)
- Banner/carrossel hero
- Sidebar "Now watching"
- Filtros por gênero
- Setas de navegação ◀ ▶
- Campo de busca

---

## Estrutura Final de Pastas

```
Trending-Movie/
├── docs/
│   ├── references/
│   │   ├── references.md       ← [NEW] vazio
│   │   └── imagens/            ← [NEW] pasta vazia
│   ├── requirements.md         ← [NEW] vazio
│   └── architecture.md         ← [NEW] vazio
├── src/
│   ├── components/
│   │   ├── Header.jsx          ← [MODIFY] preencher com NavLinks
│   │   └── MovieCard.jsx       ← [NEW] card reutilizável
│   ├── pages/
│   │   ├── Home.jsx            ← [NEW] página /
│   │   ├── Movies.jsx          ← [NEW] página /movies
│   │   └── Series.jsx          ← [NEW] página /series
│   ├── App.jsx                 ← [MODIFY] importar e renderizar <Home />
│   ├── main.jsx                ← [MODIFY] corrigir rotas
│   └── index.css               ← [MODIFY] estilos globais do projeto
├── .env                        ← [NEW] token TMDB
├── .gitignore                  ← [MODIFY] adicionar .env
├── package.json                ← sem alteração
└── README.md                   ← sem alteração
```

---

## Proposed Changes

---

### `.env` — Token TMDB

#### [NEW] `.env` (raiz do projeto)

```env
VITE_TMDB_TOKEN=seu_bearer_token_aqui
```

> [!CAUTION]
> Adicionar `.env` ao `.gitignore` para não subir o token ao GitHub.

#### [MODIFY] [`.gitignore`](file:///C:/React/Trending_Movie-React/Trending-Movie/.gitignore)
Adicionar linha `.env` caso ainda não esteja.

---

### `docs/` — Documentação (arquivos criados, mas **não preenchidos**)

#### [NEW] `docs/references/references.md` — vazio
#### [NEW] `docs/references/imagens/` — pasta vazia (arquivo `.gitkeep`)
#### [NEW] `docs/requirements.md` — vazio
#### [NEW] `docs/architecture.md` — vazio

---

### `main.jsx` — Rotas

#### [MODIFY] [`main.jsx`](file:///C:/React/Trending_Movie-React/Trending-Movie/src/main.jsx)

- Adicionar rotas `/movies` e `/series`
- Importar páginas de `./pages/`

```jsx
import { StrictMode } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Movies from './pages/Movies.jsx'
import Series from './pages/Series.jsx'

const router = createBrowserRouter([
  { path: '/',       element: <App /> },
  { path: '/movies', element: <Movies /> },
  { path: '/series', element: <Series /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```

---

### `App.jsx` — Wrapper da Home

#### [MODIFY] [`App.jsx`](file:///C:/React/Trending_Movie-React/Trending-Movie/src/App.jsx)

- Remove imports desnecessários (`heroImg`, `reactLogo`, `viteLogo`)
- Importa e renderiza `<Home />`

```jsx
import Home from './pages/Home.jsx'

function App() {
  return <Home />
}

export default App
```

---

### `components/Header.jsx` — Navegação

#### [MODIFY] [`Header.jsx`](file:///C:/React/Trending_Movie-React/Trending-Movie/src/components/Header.jsx)

- `<NavLink>` para `/`, `/movies`, `/series`
- Classe `active` aplicada automaticamente pelo React Router no link atual

```jsx
import { NavLink } from 'react-router'

function Header() {
  return (
    <header>
      <h1>🎬 Trending Movies</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Filmes</NavLink>
        <NavLink to="/series">Séries</NavLink>
      </nav>
    </header>
  )
}

export default Header
```

---

### `components/MovieCard.jsx` — Card Reutilizável

#### [NEW] [`MovieCard.jsx`](file:///C:/React/Trending_Movie-React/Trending-Movie/src/components/MovieCard.jsx)

Props recebidas via desestruturação:

| Prop | Tipo | Descrição |
|------|------|-----------|
| `title` | string | Título do filme/série |
| `poster_path` | string | Caminho do poster (TMDB) |
| `vote_average` | number | Nota de 0–10 |
| `release_date` | string | Data de lançamento |

Base URL das imagens TMDB: `https://image.tmdb.org/t/p/w500`

---

### `pages/Home.jsx` — Página Inicial

#### [NEW] [`Home.jsx`](file:///C:/React/Trending_Movie-React/Trending-Movie/src/pages/Home.jsx)

- Renderiza `<Header />`
- Seção de boas-vindas com título e descrição do site
- **Sem fetch** — apenas apresentação

---

### `pages/Movies.jsx` — Página de Filmes

#### [NEW] [`Movies.jsx`](file:///C:/React/Trending_Movie-React/Trending-Movie/src/pages/Movies.jsx)

```
useState → movies = [], loading = true
useEffect → fetch /trending/movie/day com Bearer token
         → setMovies(data.results), setLoading(false)
Renderiza → <Header /> + lista de <MovieCard />
```

Endpoint: `https://api.themoviedb.org/3/trending/movie/day`

---

### `pages/Series.jsx` — Página de Séries

#### [NEW] [`Series.jsx`](file:///C:/React/Trending_Movie-React/Trending-Movie/src/pages/Series.jsx)

Mesmo padrão de `Movies.jsx`.

Endpoint: `https://api.themoviedb.org/3/trending/tv/day`

> [!NOTE]
> Para séries, a TMDB retorna `name` em vez de `title` e `first_air_date`
> em vez de `release_date`. O `MovieCard` tratará os dois casos.

---

### `index.css` — Estilos Globais

#### [MODIFY] [`index.css`](file:///C:/React/Trending_Movie-React/Trending-Movie/src/index.css)

- Reset básico (`*, box-sizing, margin, padding`)
- Estilos do `<header>` e `<nav>`
- Layout de grid para os cards
- Estilo do `<MovieCard>` (poster, título, nota)
- Classe `.active` para o NavLink ativo

---

## Fluxo de Dados

```
Usuário acessa /movies
    └─ Movies.jsx monta
        ├─ useState: movies=[], loading=true
        └─ useEffect dispara fetch
            └─ GET /trending/movie/day
                └─ setMovies(results)
                   setLoading(false)
                    └─ Renderiza lista de <MovieCard />
```

---

## Verification Plan

### Manual
1. `npm run dev` → sem erros no terminal
2. `/` → Home com Header visível
3. Clicar "Filmes" → `/movies` → lista de cards com poster, título e nota
4. Clicar "Séries" → `/series` → lista de cards de séries
5. Link ativo no Header visualmente diferente dos demais
6. Console do browser sem erros de CORS ou autenticação
