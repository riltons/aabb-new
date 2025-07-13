# Mapa de Funcionalidades, Fluxograma, PRD Resumido e Prompt para Desenvolvimento IA

---

## 1. Fluxograma do Funcionamento do Sistema

```
[Login/Registro] 
      |                   
      v                  
[Verificação de Permissão]---(Admin?)---Sim---[Painel Admin]---[Gestão de Sócios | Gestão de Espaços | Gestão de Reservas | Relatórios]
      |                                      |                      |                       |                 |
      |                                      |                      |                       |                 |
      |                                      |                      |                       |                 v
      |                                      |                      |                       |         [Visualizar Relatórios]
      |                                      |                      |                       v
      |                                      |                      |             [Gerenciar Reservas de Sócios]
      |                                      |                      v
      |                                      |              [Gerenciar Espaços]
      |                                      v
      |                              [Gerenciar Sócios]
      |
      v
(Não Admin)
      |
      v
[Painel Sócio/Cliente]
      |--[Consultar Dados Pessoais]
      |--[Cadastrar/Editar Dependentes]
      |--[Visualizar Espaços Disponíveis]
      |--[Reservar Espaço]
      |--[Visualizar Minhas Reservas]
      |--[Cancelar Reserva]
      |--[Participar de Eventos]
      |--[Recuperar Senha]

```

### Telas necessárias

- Login
- Registro
- Recuperação de Senha
- Painel do Sócio/Cliente
  - Visualização e edição de dados pessoais
  - Cadastro/edição de dependentes
  - Listagem de espaços disponíveis
  - Reserva de espaço
  - Histórico de reservas
  - Participação em eventos
- Painel Administrativo
  - Dashboard
  - Gestão de Sócios (CRUD)
  - Gestão de Dependentes
  - Gestão de Espaços (CRUD)
  - Gestão de Reservas (CRUD, confirmação/cancelamento)
  - Relatórios
  - Gerenciamento de usuários do sistema

---

## 2. PRD Resumido (ver completo em `prd.md`)

### Objetivo
Modernizar e otimizar o gerenciamento de sócios, reservas de espaços e funcionalidades essenciais para clubes.

### Funcionalidades principais
- **Gestão de Sócios:** Cadastro, atualização, categorias, dependentes, mensalidades.
- **Gestão de Espaços:** Cadastro, regras de uso, precificação.
- **Gestão de Reservas:** Agendamento, disponibilidade, confirmação, cancelamento, histórico.
- **Gestão de Usuários:** Permissões para Administradores, Funcionários e Sócios.
- **Eventos e Comunicação:** Cadastro de eventos, comunicados.
- **Relatórios:** Financeiros, uso de espaços, estatísticas de sócios.

### Perfis de Usuário
- **Administrador:** Controle total sobre o sistema.
- **Funcionário:** Gestão operacional, sem acesso a configurações críticas.
- **Sócio:** Consulta e autoatendimento.

### Requisitos não-funcionais
- Segurança (autenticação JWT, controle de acesso)
- Usabilidade
- Escalabilidade
- Manutenibilidade

---

## 3. Prompt para Desenvolvimento Assistido por IA (IDE)

> "Você é um assistente de desenvolvimento para o sistema de gestão AABB. Siga as regras abaixo:
> 
> - Sempre responda em português do Brasil.
> - Siga o PRD e o fluxograma deste arquivo.
> - Não altere layouts já aprovados sem autorização.
> - Utilize boas práticas de segurança, autenticação e controle de acesso.
> - Diferencie claramente funcionalidades de Administrador e Sócio.
> - Sempre documente endpoints, fluxos e permissões.
> - Para novas funcionalidades, sempre proponha telas, endpoints e permissões antes de codificar.
> - Antes de implementar, valide se já existe algo similar no código.
> - Utilize comentários claros e mantenha o código limpo e modular.
> - Em caso de dúvida, pergunte ao usuário.
> - Utilize PowerShell para comandos no Windows e não use '&&' para separar comandos, use ';'.
> - Salve arquivos e documentações sempre na pasta 'docs'.
> - Sempre proponha testes automatizados para novas funcionalidades."

---

## 4. Observações
- O PRD completo está em `docs/prd.md`.
- Este arquivo serve como referência rápida para onboarding, desenvolvimento e revisão de requisitos.
- Atualize este documento sempre que houver mudanças relevantes no fluxo, telas ou requisitos.
