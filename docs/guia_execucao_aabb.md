# Guia de Execução do Sistema AABB

Este guia apresenta as etapas essenciais para configurar, executar e utilizar o sistema de gestão da Associação Atlética Banco do Brasil (AABB), conforme descrito nos documentos do projeto.

---

## 1. Visão Geral do Sistema
O sistema AABB visa modernizar e otimizar o gerenciamento de sócios, reservas de espaços e funcionalidades essenciais para clubes. Possui módulos para administração, autoatendimento de sócios, reservas, eventos, comunicação e relatórios.

---

## 2. Estrutura do Projeto

Estrutura recomendada para projetos React profissionais:

```
├── src/
│   ├── assets/         # Imagens, ícones, fontes
│   ├── components/     # Componentes reutilizáveis (botões, inputs, tabelas)
│   ├── contexts/       # Contextos globais do React (ex: AuthContext)
│   ├── hooks/          # Hooks customizados (ex: useAuth, useFetch)
│   ├── pages/          # Páginas/rotas do sistema (Login, Dashboard, etc.)
│   ├── routes/         # Definição e proteção de rotas
│   ├── services/       # Serviços de API, Supabase, autenticação
│   ├── styles/         # Estilos globais, temas, variáveis CSS/SASS
│   ├── utils/          # Funções utilitárias gerais
│   ├── App.js          # Componente raiz
│   ├── index.js        # Ponto de entrada da aplicação
│   └── supabaseClient.js # Configuração do Supabase
├── docs/               # Documentação e guias
├── tests/              # Testes automatizados
├── windsurf.config.json# Configurações do projeto/IDE
├── package.json        # Dependências e scripts
└── README.md           # Documentação inicial do projeto
```

> Cada pasta contém um README.md explicando sua função e boas práticas.
> Consulte também `template.md` para exemplos e recomendações de engenharia.


---

## 3. Pré-requisitos

- Node.js instalado (versão recomendada: 18+)
- Gerenciador de pacotes (npm ou yarn)
- Conta e projeto configurados no Supabase (dados em `anotacoes.md`)

---

## 4. Configuração Inicial

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repositorio>
   cd aabb-new
   ```
2. **Instale as dependências:**
   ```sh
   npm install
   # ou
   yarn
   ```
3. **Configure variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto com as credenciais do Supabase (veja `anotacoes.md`).

   Exemplo:
   ```env
   SUPABASE_URL=https://<url>.supabase.co
   SUPABASE_ANON_KEY=<chave_anon>
   SUPABASE_SERVICE_ROLE_KEY=<chave_service_role>
   ```

4. **Configure o arquivo `windsurf.config.json`** (veja exemplo em `template.md`).

---

## 5. Execução do Sistema

- **Ambiente de desenvolvimento:**
  ```sh
  npm run dev
  # ou
  yarn dev
  ```
- **Ambiente de produção:**
  ```sh
  npm run build
  npm start
  # ou
  yarn build
  yarn start
  ```

---

## 6. Principais Fluxos do Sistema

### 6.1. Autenticação
- Cadastro e login de sócios e administradores
- Recuperação de senha
- Validação de e-mail
- Middleware de autenticação para rotas protegidas

### 6.2. Gestão de Sócios
- Cadastro, edição e visualização de sócios e dependentes
- Controle de categorias e mensalidades

### 6.3. Gestão de Espaços e Reservas
- Cadastro de espaços
- Agendamento, confirmação e cancelamento de reservas
- Visualização de disponibilidade

### 6.4. Painéis
- Painel administrativo: gestão de sócios, espaços, reservas, relatórios
- Painel do sócio: autoatendimento, reservas, eventos

### 6.5. Relatórios e Notificações
- Geração de relatórios gerenciais
- Notificações por e-mail e no sistema

> Consulte `mapa-funcionalidade-fluxo.md` para fluxogramas e detalhes dos módulos.

---

## 7. Boas Práticas e Recomendações

- Use o Cascade para dividir tarefas e acompanhar o progresso do desenvolvimento (veja `template.md`).
- Mantenha o código limpo, modular e documentado.
- Utilize o controle de versão (Git) e faça commits frequentes.
- Realize testes automatizados antes de deploys.
- Consulte sempre os arquivos da pasta `docs` para detalhes sobre requisitos, fluxos e decisões do projeto.

---

## 8. Suporte
Em caso de dúvidas, consulte a documentação na pasta `docs` ou entre em contato com a equipe de desenvolvimento.

---

**Referências:**
- `prd.md`: Documento de requisitos completo
- `mapa-funcionalidade-fluxo.md`: Fluxogramas e funcionalidades
- `template.md`: Boas práticas e estrutura de projeto
- `anotacoes.md`: Dados de acesso e configuração do Supabase

---

> Última atualização: 13/07/2025
