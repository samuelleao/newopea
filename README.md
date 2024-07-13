# Projeto de Melhoria de Aplicação

Abaixo, você encontrará uma descrição detalhada das funcionalidades adicionadas e suas motivações, bem como as tecnologias utilizadas.

- Link da aplicação: [Acessar aplicação](https://newopea.vercel.app/)

## Melhorias e Funcionalidades da Aplicação

### Paginação e Filtros

- **Query Params**: Implementação de paginação e filtros através de query params, permitindo que todas as ações sejam salvas no histórico do usuário.
- **Experiência do Usuário**: Facilita a navegação e a preservação dos filtros e página selecionada, mesmo após a atualização da página ou ao compartilhar a URL.

### Cards das Emissões

- **Visualização Melhorada**: Informações dispostas de forma espaçada para melhor leitura.
- **Botão de Ação**: Adicionado um botão "Visualizar detalhes" nos cards para indicar a clicabilidade, conforme o conceito do livro *Não me Faça Pensar*.

### Campo de Pesquisa

- **Search Params**: Permite que as pesquisas sejam compartilháveis e salvas no histórico do usuário.

### Melhoria de Formulário

- **Seções**: Formulário de cadastro de nova emissão separado por seções, facilitando a leitura das informações.

### Redução de Layout Shift

- **Mensagens de Erro**: Espaços reservados para mensagens de erro para evitar quebra de layout, conforme recomendado em [web.dev](https://web.dev/articles/cls?hl=pt-br).

### Modal de Cadastro - Layout Responsivo

- **Versão Mobile**: Modal posicionado na parte inferior da tela para facilitar o alcance do dedo do usuário.

### Tela de Detalhes

- **Navegação Intuitiva**: Informações dispostas por seções com navegação simples na sidebar.
- **Gráfico de Cores**: Adicionado para auxiliar na análise de dados.

## Infraestrutura do Código

### Segurança e Performance

- **NextJS**: Utilização de requisições pelo lado do servidor, reduzindo o JS no navegador e evitando erros de CORS.
- **Lógica de Negócio**: Lógica mantida no servidor para maior segurança.

### Componentes Reutilizáveis

- **Botões**: Adaptáveis para status de loading de forma intuitiva.
- **Inputs**: Componentes agrupados para facilitar a criação de inputs com label, input e mensagem de erro.

### Escalabilidade de Cores

- **CSS Global**: Arquivo com variáveis de cores primárias e secundárias, facilitando futuras mudanças na paleta de cores.

## Tecnologias Utilizadas

- **NextJS e Tailwind**: Frameworks principais para a construção da aplicação.
- **Radix UI**: Criação de funcionalidades na interface e acessibilidade.
- **CLSX e Tailwind Merge**: Estilização com Tailwind sem conflitos.
- **Hook Form**: Controle de formulários em tempo real no cliente.
- **Zod**: Validação de tipos através de schemas de dados.
- **Sonner**: Geração de toasts acessíveis e modernos.
- **Date-fns e DayJS**: Validação e transformação de datas.
- **Lucide-react e Radix Icons**: Fornecimento de ícones.

## Observações

As funcionalidades foram desenvolvidas para demonstrar minhas habilidades como desenvolvedor frontend. Devido a restrições de tempo, algumas funcionalidades foram implementadas de forma simplificada.

---

Espero que este projeto demonstre minhas habilidades e dedicação em criar uma aplicação robusta, intuitiva e com foco na experiência do usuário. Fico à disposição para discutir mais sobre o projeto e minhas qualificações.
