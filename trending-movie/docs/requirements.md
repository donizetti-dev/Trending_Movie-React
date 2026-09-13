# Requirements — Trending-Movies

## 1. Visão do Produto

### Nome
Trending-Movies

### Problema
Usuários não têm uma forma rápida e simples de saber quais filmes e séries estão em alta no dia.

### Público
Qualquer faixa etária — pessoas interessadas em filmes e séries.

### Proposta de solução
Site que consome a API TMDB e exibe os filmes e séries mais populares do dia, organizados em páginas separadas e acessíveis pelo menu de navegação.

## 2. Objetivo do MVP

Exibir as listas de filmes e séries em alta do dia consumindo a API TMDB, com navegação funcional entre as três páginas (Home, Filmes, Séries).

## 3. Funcionalidades

### F01 — Navegação entre páginas

**Descrição:** Header fixo com links para as três páginas do site.

**Critérios de aceitação:**
- [x] Header visível em todas as páginas
- [x] Links para Home (`/`), Filmes (`/movies`) e Séries (`/series`)
- [x] Link da página atual visualmente destacado

**Estados:**
- [x] Inicial — link ativo destacado ao carregar a página

### F02 — Listagem de Filmes em Alta

**Descrição:** Busca e exibe os filmes em alta do dia via TMDB.

**Critérios de aceitação:**
- [x] Requisição feita ao endpoint `/trending/movie/day`
- [x] Exibir poster, título, nota e data de lançamento de cada filme

**Estados:**
- [x] Carregando — indicador de loading enquanto aguarda a API
- [x] Sucesso — lista de cards exibida
- [x] Erro — mensagem de erro exibida ao usuário

### F03 — Listagem de Séries em Alta

**Descrição:** Busca e exibe as séries em alta do dia via TMDB.

**Critérios de aceitação:**
- [x] Requisição feita ao endpoint `/trending/tv/day`
- [x] Exibir poster, nome, nota e data do primeiro episódio de cada série

**Estados:**
- [x] Carregando — indicador de loading enquanto aguarda a API
- [x] Sucesso — lista de cards exibida
- [x] Erro — mensagem de erro exibida ao usuário

```

## 4. Fora do Escopo

- Busca por título
- Filtros por gênero, ano ou nota
- Página de detalhe do filme/série
- Autenticação de usuário
- Favoritos ou listas personalizadas
- Paginação dos resultados
- Banner/carrossel hero
- Sidebar "Now watching"
- Setas de navegação ◀ ▶ nas listas

## 5. Design

### RD-01 — Tema
- Interface no estilo dark mode
- Fundo geral escuro (`#121212` ou similar)
- Texto principal em branco / cinza claro
- Cor de destaque: laranja ou amarelo (usada na nota ⭐)

### RD-02 — Header
- Fundo escuro, largura total da tela
- Logo à esquerda (texto "🎬 Trending Movies")
- Links de navegação à direita: Home, Filmes, Séries
- Link da página ativa com destaque visual (sublinhado ou cor diferente)

### RD-03 — Card de Filme/Série
- Poster com largura fixa (~200px) e bordas arredondadas
- Título abaixo do poster
- Nota com ícone ⭐ abaixo do título
- Fundo do card levemente mais claro que o fundo geral
- Efeito hover: leve escala ou sombra

### RD-04 — Layout das listagens
- Grid responsivo (3–4 colunas em desktop)
- Título da seção acima do grid (ex: "Filmes em Alta Hoje")
