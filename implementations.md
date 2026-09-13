# 📋 Implementations — Trending-Movies

> Histórico de evolução do projeto. Cada entrada registra o que foi criado ou alterado, o estado atual e quando foi feito.

**Data de criação deste arquivo:** 13/09/2026  
**Stack:** React 19 + Vite 8 + React Router v7 + TMDB API  
**Repositório:** `C:\React\Trending_Movie-React`

---

## 🟢 Estado Geral: MVP Completo

Todas as funcionalidades do MVP foram implementadas. O projeto está funcional e documentado.

---

## 🗓️ Registro de Implementações

### v0.1.0 — Estrutura Inicial do Projeto
**Data:** Setembro/2026  
**Estado:** ✅ Concluído

Bootstrapping do projeto com Vite + React. Configuração inicial da stack e da estrutura de pastas.

| Arquivo | Operação | Descrição |
|---|---|---|
| `package.json` | CRIADO | Dependências: react 19, react-dom 19, react-router 7, vite 8 |
| `vite.config.js` | CRIADO | Configuração padrão do Vite com plugin React |
| `eslint.config.js` | CRIADO | ESLint configurado com plugins react-hooks e react-refresh |
| `index.html` | CRIADO | Ponto de entrada HTML com `div#root` |
| `.gitignore` | MODIFICADO | Adicionada linha `.env` para não versionar o token TMDB |

---

### v0.2.0 — Autenticação e Variáveis de Ambiente
**Data:** Setembro/2026  
**Estado:** ✅ Concluído

Configuração do token de acesso à API TMDB via variável de ambiente Vite.

| Arquivo | Operação | Descrição |
|---|---|---|
| `.env` | CRIADO | `VITE_TMDB_TOKEN` — Bearer Token para autenticação na API TMDB |

> ⚠️ O `.env` está corretamente ignorado pelo `.gitignore` e **não é versionado**.

---

### v0.3.0 — Roteamento e Ponto de Entrada
**Data:** Setembro/2026  
**Estado:** ✅ Concluído

Implementação do sistema de rotas com React Router v7 (`createBrowserRouter`).

| Arquivo | Operação | Descrição |
|---|---|---|
| `src/main.jsx` | MODIFICADO | Substituído o render padrão do Vite por `RouterProvider`. Adicionadas rotas `/`, `/movies` e `/series` |
| `src/App.jsx` | MODIFICADO | Removidos imports do boilerplate Vite. App simplificado para renderizar `<Home />` |
| `src/App.css` | REMOVIDO | Arquivo residual do boilerplate Vite — não era utilizado em nenhum import. Removido em 13/09/2026 |

**Rotas configuradas:**

| Rota | Componente |
|------|-----------|
| `/` | `<App />` → `<Home />` |
| `/movies` | `<Movies />` |
| `/series` | `<Series />` |

---

### v0.4.0 — Componentes Compartilhados
**Data:** Setembro/2026  
**Estado:** ✅ Concluído

Criação dos componentes reutilizáveis usados por todas as páginas.

#### `src/components/Header.jsx` — MODIFICADO
Substituído o conteúdo de boilerplate por navegação funcional com `NavLink` do React Router.

- Logo `🎬 Trending Movies` à esquerda
- Links de navegação à direita: **Home**, **Filmes**, **Séries**
- Usa `NavLink` com `end` no link Home para evitar falso-ativo
- Classe `.active` aplicada automaticamente pelo React Router no link atual

#### `src/components/MovieCard.jsx` — CRIADO
Card reutilizável para filmes **e** séries. Trata diferenças de campos da TMDB API internamente.

| Prop | Tipo | Uso |
|------|------|-----|
| `title` | string | Título de filmes (TMDB: `title`) |
| `name` | string | Nome de séries (TMDB: `name`) |
| `poster_path` | string | Caminho do poster — base URL: `https://image.tmdb.org/t/p/w500` |
| `vote_average` | number | Nota de 0–10, exibida com `toFixed(1)` |
| `release_date` | string | Data de lançamento de filmes |
| `first_air_date` | string | Data do primeiro episódio de séries |

**Extras implementados além do plano original:**
- Fallback de poster: exibe `div` com texto "Sem imagem" quando `poster_path` é nulo
- Exibe apenas o **ano** da data (usando `new Date().getFullYear()`)
- Truncamento de título em 2 linhas com `-webkit-line-clamp`

---

### v0.5.0 — Páginas
**Data:** Setembro/2026  
**Estado:** ✅ Concluído

Implementação das três páginas da aplicação.

#### `src/pages/Home.jsx` — CRIADO
Página de boas-vindas sem fetch de dados.

- Renderiza `<Header />`
- Seção hero centralizada com título "O que está em alta hoje?"
- Descrição com link para o site TMDB
- Dois botões de ação: **🎬 Ver Filmes** e **📺 Ver Séries**

#### `src/pages/Movies.jsx` — CRIADO
Página de listagem de filmes em alta.

- Endpoint: `GET https://api.themoviedb.org/3/trending/movie/day`
- Autenticação: Bearer Token via `VITE_TMDB_TOKEN`
- Estados gerenciados: `movies[]`, `loading`, `error`
- Renderiza grid de `<MovieCard />` com todos os campos do item via spread `{...movie}`
- Trata estados de carregamento e erro com mensagens ao usuário

#### `src/pages/Series.jsx` — CRIADO
Página de listagem de séries em alta. Mesmo padrão de `Movies.jsx`.

- Endpoint: `GET https://api.themoviedb.org/3/trending/tv/day`
- TMDB retorna `name` (em vez de `title`) e `first_air_date` (em vez de `release_date`) — tratado pelo `MovieCard`

---

### v0.6.0 — Estilização Global
**Data:** Setembro/2026  
**Estado:** ✅ Concluído

Substituição completa do CSS padrão do Vite por estilos customizados do projeto.

| Arquivo | Operação | Descrição |
|---|---|---|
| `src/index.css` | MODIFICADO | Reescrito do zero com sistema de design próprio |

**Tokens CSS definidos em `:root`:**

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-primary` | `#121212` | Fundo geral |
| `--bg-header` | `#1a1a1a` | Fundo do Header |
| `--bg-card` | `#1e1e1e` | Fundo dos cards |
| `--text-primary` | `#ffffff` | Texto principal |
| `--text-secondary` | `#aaaaaa` | Texto secundário |
| `--accent` | `#f5c518` | Nota ⭐, botões, link ativo |

**Seções do CSS:**
- Reset global (`box-sizing`, `margin`, `padding`)
- `.header`, `.header__logo`, `.header__nav` — Header sticky com z-index 100
- `.home`, `.home__hero`, `.home__btn` — Página inicial centralizada com botões
- `.page`, `.page__title` — Layout das páginas Movies/Series
- `.status`, `.status--error` — Feedbacks de loading e erro
- `.grid` — `display: grid` com `auto-fill, minmax(200px, 1fr)`
- `.card`, `.card__poster`, `.card__info`, `.card__title`, `.card__rating`, `.card__date` — Card completo
- `@media (max-width: 600px)` — Responsividade mobile

---

### v0.7.0 — Documentação
**Data:** Setembro/2026  
**Estado:** ✅ Concluído

| Arquivo | Operação | Descrição |
|---|---|---|
| `docs/requirements.md` | CRIADO | Requisitos funcionais (F01–F03), design (RD-01–RD-04) e escopo |
| `docs/architecture.md` | CRIADO | Arquitetura, estrutura de pastas, estado, dependências e paleta de cores |
| `docs/references/references.md` | CRIADO | Referências visuais do projeto |
| `docs/references/referencia-01.png` | CRIADO | Imagem de referência UI (MovieGather) |
| `trending-movie/README.md` | CRIADO | Guia de instalação, variáveis de ambiente, rotas e stack |
| `C:\React\Plan.md` | CRIADO | Plano de implementação completo (documento de planejamento) |

---

### v0.8.0 — Correções de Documentação e Limpeza
**Data:** 13/09/2026  
**Estado:** ✅ Concluído

Revisão e correção de inconsistências entre o código real e a documentação.

| Arquivo | Operação | Descrição |
|---|---|---|
| `src/App.css` | REMOVIDO | Arquivo residual do boilerplate sem uso — nenhum import o referenciava |
| `docs/architecture.md` | MODIFICADO | Props do `MovieCard` atualizadas para incluir `name` e `first_air_date` (campos de séries) |
| `docs/requirements.md` | MODIFICADO | Todos os checkboxes de F01, F02 e F03 marcados como concluídos `[x]` |
| `docs/references/references.md` | MODIFICADO | Caminho da imagem corrigido (`./referencia-01.png`), seção duplicada e templates vazios removidos |
| `implementations.md` | CRIADO | Este arquivo — histórico de evolução do projeto |

---

## 📌 Resumo Rápido

| Área | Estado |
|------|--------|
| Projeto funcional (MVP) | ✅ Completo |
| Roteamento (3 rotas) | ✅ Implementado |
| Componentes (Header, MovieCard) | ✅ Implementados |
| Páginas (Home, Movies, Series) | ✅ Implementadas |
| Fetch TMDB (filmes e séries) | ✅ Funcionando |
| Estilos (dark mode, grid, responsivo) | ✅ Implementados |
| Documentação | ✅ Corrigida e alinhada com o código |
