# Boas vindas ao repositório do Talker Manager!

Neste projeto foi desenvolvida uma API de um CRUD de palestrantes.

## Habilidades

- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.

<details>
  <summary>
    <h3>
      Antes de começar a desenvolver
    </h3>
    </summary>

1. Clone o repositório

- `git clone git@github.com:mabiiak/talker-manager.git.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd talker-manager`

2. Instale as dependências

- `npm install`

3. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b nome-talker-manager`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .`
    - `git status`
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'descrição do commit'`
    - `git status`

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin nome-talker-manager`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/mabiiak/talker-manager/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/mabiiak/talker-manager/pulls) e confira que o seu _Pull Request_ está criado

</details>

## Lista de requisitos

    ✅ 1 - Crie o endpoint GET `/talker`

    ✅ 2 - Crie o endpoint GET `/talker/:id`

    ✅ 3 - Crie o endpoint POST `/login`

    ✅ 4 - Crie o endpoint POST `/talker`

    ✅ 5 - Crie o endpoint PUT `/talker/:id`

    ✅ 6 - Crie o endpoint DELETE `/talker/:id`

    ❌ 7 - Crie o endpoint GET `/talker/search?q=searchTerm`
