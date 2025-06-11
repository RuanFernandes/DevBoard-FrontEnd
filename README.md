# Dev Board

Dev Board é uma aplicação web moderna para gerenciamento de projetos e colaboração entre desenvolvedores, construída com React, TypeScript, Vite e Chakra UI. O projeto utiliza autenticação via GitHub, gerenciamento global de estado com Zustand, roteamento protegido e uma interface responsiva e elegante.

## Tecnologias Utilizadas

- **React 19** – Biblioteca principal para construção da interface.
- **TypeScript** – Tipagem estática para maior robustez.
- **Vite** – Bundler moderno para desenvolvimento rápido.
- **Chakra UI** – Biblioteca de componentes acessíveis e customizáveis.
- **Zustand** – Gerenciamento global de estado simples e eficiente.
- **Axios** – Cliente HTTP para comunicação com o backend.
- **React Router DOM v7** – Roteamento SPA.
- **Autenticação OAuth via GitHub** – Login seguro e prático.
- **Partículas animadas** – Efeito visual na tela inicial.

## Estrutura do Projeto

```
src/
  api/                # Comunicação com backend e autenticação
    ApiClient.ts
    auth/
      auth.ts
  components/         # Componentes reutilizáveis (UI, Navbar, Partículas, etc)
  pages/              # Páginas principais (Home, Login, Board)
  RouteGuard/         # Proteção de rotas privadas
  theme.ts            # Paleta de cores e tema
  main.tsx            # Ponto de entrada da aplicação
```

## Funcionalidades

- **Login com GitHub**: O usuário é redirecionado para autenticação via GitHub. Após o login, os dados do usuário (token, nome, avatar, etc) são salvos globalmente e no localStorage.
- **Proteção de Rotas**: Apenas usuários autenticados acessam áreas restritas, como o board.
- **Navbar com Avatar**: Exibe informações do usuário logado e opção de logout.
- **Toasts de Feedback**: Notificações amigáveis para ações do usuário.
- **Tema Escuro**: Interface moderna com suporte a dark mode.
- **Partículas Animadas**: Efeito visual na tela inicial.

## Como rodar o projeto

1. **Instale as dependências:**
   ```sh
   npm install
   ```

2. **Configure as variáveis de ambiente (se necessário):**
   - O endpoint da API está definido em [`src/api/ApiClient.ts`](src/api/ApiClient.ts) como `https://localhost:3000/`.

3. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

4. **Acesse em:**  
   [http://localhost:5173](http://localhost:5173)

## Fluxo de Autenticação

1. O usuário clica em "Entrar com GitHub".
2. É redirecionado para `/auth/github` no backend.
3. Após autenticação, o backend redireciona para `/login/callback?token=...&username=...&avatarUrl=...`.
4. O frontend salva os dados do usuário globalmente e no localStorage usando [`useAuthStore`](src/api/auth/auth.ts).
5. O token é automaticamente incluído nas requisições via [`ApiClient`](src/api/ApiClient.ts).

## Scripts Disponíveis

- `npm run dev` – Inicia o ambiente de desenvolvimento.
- `npm run build` – Gera a build de produção.
- `npm run preview` – Visualiza a build de produção localmente.
- `npm run lint` – Executa o ESLint.

## Convenções e Boas Práticas

- **Componentização**: Componentes reutilizáveis e desacoplados.
- **Tipagem**: Sempre utilize interfaces/types para dados e props.
- **Estado Global**: Utilize Zustand para autenticação e dados globais.
- **Roteamento Protegido**: Use o [`RouteGuard`](src/RouteGuard/index.tsx) para proteger páginas privadas.
- **Feedback ao Usuário**: Utilize o [`toaster`](src/components/ui/toaster.tsx) para mensagens.

## Licença

Este projeto é de uso exclusivo do autor. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por Ruan Fernandes Guimaraes.