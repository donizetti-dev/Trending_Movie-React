# Trending Movie

Aplicação web desenvolvida em React para exploração, busca e recomendação de filmes em alta, trazendo sinopses, avaliações, detalhes da produção e interface responsiva.

---

## Integrantes do Grupo

- **Donizetti Roberto Batista Santos Junior** — RM569576
- **Arthur Meneghin Nery** — RM569088
<!-- Adicione os outros integrantes abaixo se houver -->
<!-- - Nome do Integrante — RM000000 -->

---

## Problema

Com a enorme quantidade de lançamentos semanais nos cinemas e serviços de streaming, os usuários enfrentam com frequência a **fadiga de decisão** — despendem muito tempo alternando entre catálogos dispersos sem encontrar avaliações consolidadas, dados técnicos confiáveis ou recomendações rápidas e centralizadas.

---

## Solução

O **Trending Movie** centraliza os títulos mais populares e recentes em uma aplicação web rápida, moderna e intuitiva:
- Acompanhamento em tempo real dos títulos em alta (`trending`).
- Busca dinâmica de filmes com listagem instantânea.
- Visualização detalhada de dados: sinopse, elenco, avaliações e data de lançamento.
- Navegação fluida entre telas com roteamento no cliente.

---

## Tecnologias Utilizadas

- **Frontend:** [React.js](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Roteamento:** [React Router Dom](https://reactrouter.com/)
- **Ícones:** [React Icons (Font Awesome 6)](https://react-icons.github.io/react-icons/)
- **Qualidade de Código:** ESLint
- **Estilização:** CSS3 / Modern CSS

---

## API Usada

- **[The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)**
  - Fornece a listagem de filmes em alta (`trending`), buscas textuais por título, pôsteres oficiais e metadados detalhados de cada produção.

---

## Funcionalidades

- 🔥 **Filmes em Alta:** Catálogo dinâmico dos títulos mais assistidos no período.
- 🔍 **Pesquisa Dinâmica:** Busca rápida de produções por nome.
- 📄 **Página de Detalhes:** Informações completas sobre notas, sinopse, gênero e elenco.
- 📱 **Interface Responsiva:** Design otimizado para celulares, tablets e desktops.

---

## Uso de IA e Metodologia

O desenvolvimento deste projeto foi conduzido utilizando a metodologia **Spec-Driven Development** impulsionada por **Inteligência Artificial**:

- **Spec-Driven Development (SDD):** Todo o escopo, arquitetura de componentes, fluxo de dados e critérios de aceitação foram previamente documentados e refinados em especificações técnicas formais antes da geração de código.
- **AI Agent:** A implementação dos componentes React, configuração do ecossistema Vite/ESLint e integração com a API da TMDb foram orquestrados e gerados via agente autônomo de inteligência artificial a partir das especificações.
- **AntiGravity:** Utilizado como motor/framework de suporte no fluxo de geração e automação do agente, garantindo consistência na estrutura do código, alinhamento com as regras de negócio definidas e entrega sem atrito.

---

## Instruções de Execução do Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (v18 ou superior)
- Gerenciador de pacotes `npm`

### Executando Localmente

**Clone o repositório:**


**Acesse a pasta da aplicação (trending-movie):**
-  cd trending-movie

**Instale as dependências:**
- npm install

**Configure as variáveis de ambiente:**
- Crie ou edite o arquivo .env dentro da pasta trending-movie/:

**Snippet de código**
- VITE_TMDB_API_KEY=sua_chave_da_tmdb_aqui

**Inicie o servidor de desenvolvimento:**
- npm run dev

**Abra no navegador:**
- Acesse a URL informada no terminal (geralmente http://localhost:5173).