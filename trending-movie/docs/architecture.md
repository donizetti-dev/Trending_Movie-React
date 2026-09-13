# Architecture — Trending-Movies

## 1. Visão Geral

Aplicação de página única (SPA) em React com três rotas gerenciadas pelo React Router. Cada página busca dados da API TMDB de forma independente usando `useState` e `useEffect`. O CSS é centralizado em `index.css`.

## 2. Estrutura de Pastas

```text
src/
├── components/
│   ├── Header.jsx
│   └── MovieCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Movies.jsx
│   └── Series.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 3. Páginas e Rotas

`App.jsx` funciona como **layout compartilhado**: renderiza `<Header />` uma única vez e usa `<Outlet />` (React Router) para injetar a página filha correspondente à rota ativa. As páginas filhas não importam nem renderizam o Header individualmente.

```
App.jsx (layout)
└── <Header />
└── <Outlet />
    ├── / → Home.jsx
    ├── /movies → Movies.jsx
    └── /series → Series.jsx
```

| Página | Rota | Objetivo |
|---|---|---|
| Home | `/` | Apresentar o site ao usuário |
| Filmes | `/movies` | Listar filmes em alta do dia |
| Séries | `/series` | Listar séries em alta do dia |

## 4. Componentes

| Componente | Responsabilidade | Props |
|---|---|---|
| `Header` | Barra de navegação com links para as três páginas | — |
| `MovieCard` | Exibir informações de um filme ou série | `title`, `name`, `poster_path`, `vote_average`, `release_date`, `first_air_date` |

## 5. Estado da Aplicação

| Estado | Onde será controlado? | Por quê? |
|---|---|---|
| Lista de filmes | `Movies.jsx` | Estado local da página, sem necessidade de compartilhamento |
| Lista de séries | `Series.jsx` | Estado local da página, sem necessidade de compartilhamento |
| Loading | `Movies.jsx` e `Series.jsx` | Controla exibição do indicador de carregamento |
| Erro | `Movies.jsx` e `Series.jsx` | Controla exibição de mensagem de erro |

## 6. useEffect

| Efeito | Quando acontece? | O que faz? |
|---|---|---|
| Fetch de filmes | Ao montar `Movies.jsx` | Busca `/trending/movie/day` e atualiza o estado |
| Fetch de séries | Ao montar `Series.jsx` | Busca `/trending/tv/day` e atualiza o estado |


## 7. Dependências

| Biblioteca | Uso | Motivo |
|---|---|---|
| `react` | Criação de componentes e hooks | Base do projeto |
| `react-dom` | Renderização no DOM | Base do projeto |
| `react-router` | Roteamento entre páginas | Navegação sem recarregar a página |
| TMDB API | Fonte de dados de filmes e séries | API gratuita com dados atualizados diariamente |

---

## 8. Design e Estilização

### Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| `--bg-primary` | `#121212` | Fundo geral da página |
| `--bg-header` | `#1a1a1a` | Fundo do Header |
| `--bg-card` | `#1e1e1e` | Fundo dos cards |
| `--text-primary` | `#ffffff` | Texto principal |
| `--text-secondary` | `#aaaaaa` | Texto secundário (data) |
| `--accent` | `#f5c518` | Nota ⭐ e link ativo |

### Componentes Visuais

**Header**
- Largura total, fundo `--bg-header`
- Logo à esquerda, nav à direita
- `NavLink` ativo com `color: var(--accent)` e `border-bottom`

**MovieCard**
- Poster: largura 200px, `border-radius: 8px`
- Fundo: `--bg-card`
- Hover: `transform: scale(1.03)` com `transition`
- Nota: ⭐ + número com `color: var(--accent)`

**Grid de Cards**
- `display: grid`
- `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`
- `gap: 1.5rem`

### Elementos fora do escopo visual
- Banner/carrossel hero
- Sidebar "Now watching"
- Filtros por gênero
- Setas de navegação ◀ ▶
- Campo de busca
