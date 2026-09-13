# 🎬 Trending-Movies

Site que exibe os filmes e séries em alta do dia, consumindo a API TMDB.
Projeto desenvolvido para aprendizado de React.

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org) instalado
- Token de acesso à API TMDB (já configurado no `.env`)

### Instalação

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Variáveis de Ambiente

O projeto usa um arquivo `.env` na raiz com o Bearer Token da TMDB:

```env
VITE_TMDB_TOKEN=seu_token_aqui
```

> ⚠️ O arquivo `.env` **não é versionado** (está no `.gitignore`).
> Para obter um token, crie uma conta em [themoviedb.org](https://www.themoviedb.org) e acesse:
> **Configurações → API → API Read Access Token**

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx      # Barra de navegação
│   └── MovieCard.jsx   # Card reutilizável de filme/série
├── pages/
│   ├── Home.jsx        # Página inicial (/)
│   ├── Movies.jsx      # Filmes em alta (/movies)
│   └── Series.jsx      # Séries em alta (/series)
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🗺️ Rotas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/movies` | Filmes em alta do dia |
| `/series` | Séries em alta do dia |

---

## 🛠️ Stack

| Tecnologia | Versão |
|-----------|--------|
| React | 19 |
| Vite | 8 |
| React Router | 7 |

---

## 📄 Documentação

A pasta `docs/` contém a documentação do projeto:

- [`requirements.md`](./docs/requirements.md) — Requisitos funcionais e de design
- [`architecture.md`](./docs/architecture.md) — Arquitetura, componentes e fluxo de dados
- [`references/references.md`](./docs/references/references.md) — Referências visuais
