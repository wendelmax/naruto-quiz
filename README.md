# Naruto Character Quiz

**Descubra qual personagem de Naruto você é através deste quiz interativo!**

---

## Índice

- [Introdução](#introdução)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Fórmula de Seleção](#fórmula-de-seleção)
  - [Cálculo da Distância Euclidiana](#cálculo-da-distância-euclidiana)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
  - [Passos para Contribuir](#passos-para-contribuir)
- [Licença](#licença)
- [Agradecimentos](#agradecimentos)
- [Contato](#contato)

---

## Introdução

Bem-vindo ao **Naruto Character Quiz**! Esta aplicação permite que os usuários respondam a uma série de perguntas para determinar qual personagem de Naruto melhor corresponde à sua personalidade e habilidades. Seja você um fã de Naruto ou apenas curioso sobre qual ninja você mais se assemelha, este quiz oferece uma maneira envolvente e divertida de descobrir.

---

## Tecnologias Utilizadas

- **Frontend:**
  - [Vue.js 3](https://vuejs.org/)
  - [BootstrapVue 3](https://bootstrap-vue-3.org/)
  - [Vite](https://vitejs.dev/)
  
- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [Sequelize ORM](https://sequelize.org/)
  - [SQLite3](https://www.sqlite.org/index.html)
  
- **Outros:**
  - [Bootstrap 5](https://getbootstrap.com/)
  - [Bootstrap Icons](https://icons.getbootstrap.com/)
  - [Axios](https://axios-http.com/)

---

## Funcionalidades

- **Quiz Interativo:** Responda a uma série de perguntas cuidadosamente elaboradas para determinar qual personagem de Naruto combina mais com você.
- **Rastreamento de Progresso:** Uma barra de progresso fixa no topo mantém o controle do seu status de conclusão.
- **Resultados Dinâmicos:** Com base em suas respostas, o quiz calcula e exibe o personagem que melhor se encaixa no seu perfil.
- **Perfis de Personagens:** Cada personagem resultante inclui uma descrição e uma imagem obtida de uma API externa.
- **Design Responsivo:** Garante uma experiência contínua em vários dispositivos e tamanhos de tela.
- **Administração de Conteúdo:** Permite que administradores adicionem novos personagens e perguntas dinamicamente através de formulários dedicados.

---

## Instalação

Siga estes passos para configurar o **Naruto Character Quiz** na sua máquina local.

### Pré-requisitos

- **Node.js** e **npm** instalados na sua máquina. Você pode baixá-los [aqui](https://nodejs.org/).
- **Git** instalado para clonar o repositório.

### Passo a Passo

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/naruto-quiz.git
   cd naruto-quiz
   ```

2. **Configuração do Backend:**

   - **Navegue para o Diretório do Backend:**

     ```bash
     cd server
     ```

   - **Instale as Dependências:**

     ```bash
     npm install
     ```

   - **Configure o Banco de Dados:**

     - O projeto utiliza **SQLite3** como banco de dados. O arquivo `database.sqlite3` já está incluído no diretório `server/`.
     - Se desejar usar outro banco de dados (como PostgreSQL ou MySQL), atualize a configuração em `server/config/config.json` com suas credenciais.

   - **Execute as Migrações e Seeders:**

     ```bash
     npx sequelize db:migrate
     npx sequelize db:seed:all
     ```

   - **Inicie o Servidor Backend:**

     ```bash
     npm run dev
     ```

     O backend API estará disponível em `http://localhost:3000`.

3. **Configuração do Frontend:**

   - **Abra uma Nova Janela de Terminal e Navegue para o Diretório do Frontend:**

     ```bash
     cd ../client
     ```

   - **Instale as Dependências:**

     ```bash
     npm install
     ```

   - **Inicie o Servidor de Desenvolvimento do Frontend:**

     ```bash
     npm run dev
     ```

     O frontend estará disponível em `http://localhost:5173`.

---

## Uso

1. **Acesse o Quiz:**

   Abra seu navegador e vá para `http://localhost:5173`. Você verá a interface do quiz.

2. **Responda às Perguntas:**

   - Leia cada pergunta cuidadosamente.
   - Selecione a opção que melhor representa sua preferência ou habilidade.
   - A barra de progresso no topo será atualizada conforme você responde cada pergunta.

3. **Veja Seu Resultado:**

   - Após responder a todas as perguntas, clique no botão "Ver Resultado".
   - Você será redirecionado para a página de resultado exibindo o personagem de Naruto correspondente, juntamente com sua imagem e descrição.

4. **Refaça o Quiz:**

   - Se desejar refazer o quiz, clique no botão "Refazer Quiz" na página de resultados.

---

## Endpoints da API

O servidor backend fornece os seguintes endpoints de API:

### **Personagens**

- **GET `/api/characters`**
  
  - **Descrição:** Recupera uma lista de todos os personagens.
  - **Resposta:**
    ```json
    [
      {
        "id": 1,
        "name": "Naruto Uzumaki",
        "description": "O protagonista principal...",
        "ninjutsu": 5,
        "taijutsu": 4,
        "genjutsu": 3,
        "intelligence": 4,
        "strength": 5,
        "speed": 4,
        "stamina": 5,
        "special": 5,
        "imageUrl": "https://narutodb.xyz/api/character/image/naruto.jpg"
      },
      ...
    ]
    ```

- **GET `/api/characters/:id`**
  
  - **Descrição:** Recupera um personagem específico pelo ID, incluindo a URL da imagem obtida de uma API externa.
  - **Resposta:**
    ```json
    {
      "id": 1,
      "name": "Naruto Uzumaki",
      "description": "O protagonista principal...",
      "ninjutsu": 5,
      "taijutsu": 4,
      "genjutsu": 3,
      "intelligence": 4,
      "strength": 5,
      "speed": 4,
      "stamina": 5,
      "special": 5,
      "imageUrl": "https://narutodb.xyz/api/character/image/naruto.jpg"
    }
    ```

- **POST `/api/characters`**
  
  - **Descrição:** Adiciona um novo personagem ao banco de dados.
  - **Corpo da Requisição:**
    ```json
    {
      "name": "Sasuke Uchiha",
      "description": "Rival de Naruto...",
      "ninjutsu": 5,
      "taijutsu": 3,
      "genjutsu": 4,
      "intelligence": 5,
      "strength": 4,
      "speed": 5,
      "stamina": 4,
      "special": 4
    }
    ```

### **Perguntas**

- **GET `/api/questions`**
  
  - **Descrição:** Recupera uma lista de todas as perguntas do quiz.
  - **Resposta:**
    ```json
    [
      {
        "id": 1,
        "text": "Qual é a sua habilidade preferida?",
        "Options": [
          {
            "id": 1,
            "text": "Ninjutsu",
            "value": "ninjutsu",
            "weight": 3
          },
          ...
        ]
      },
      ...
    ]
    ```

- **POST `/api/questions`**
  
  - **Descrição:** Adiciona uma nova pergunta ao quiz.
  - **Corpo da Requisição:**
    ```json
    {
      "text": "Qual é a sua habilidade preferida?",
      "options": [
        {
          "text": "Ninjutsu",
          "value": "ninjutsu",
          "weight": 3
        },
        {
          "text": "Taijutsu",
          "value": "taijutsu",
          "weight": 2
        },
        ...
      ]
    }
    ```

---

## Fórmula de Seleção

Para determinar o personagem de Naruto que melhor corresponde às respostas do usuário, a aplicação utiliza a fórmula da **Distância Euclidiana**. Este método matemático mede a "distância" entre dois pontos em um espaço multidimensional—neste caso, entre as habilidades do usuário e as habilidades dos personagens.

### Cálculo da Distância Euclidiana

**Definição:**

A **Distância Euclidiana** é a distância "ordinária" entre dois pontos no espaço euclidiano. No contexto do nosso quiz, cada personagem e o usuário possuem um conjunto de habilidades representadas por valores numéricos. A distância entre o conjunto de habilidades do usuário e o conjunto de habilidades de cada personagem é calculada para encontrar o personagem mais próximo das habilidades do usuário.

**Fórmula:**

\[
\text{Distância} = \sqrt{(A_1 - B_1)^2 + (A_2 - B_2)^2 + \dots + (A_n - B_n)^2}
\]

Onde:
- \( A_i \) são os valores das habilidades do usuário.
- \( B_i \) são os valores das habilidades do personagem.

**Passo a Passo:**

1. **Coleta de Habilidades:**
   - Cada habilidade (e.g., ninjutsu, taijutsu, genjutsu) recebe um valor baseado nas respostas do usuário.
   - Cada personagem também possui valores pré-definidos para essas habilidades.

2. **Cálculo da Distância:**
   - Para cada habilidade, subtraia o valor da habilidade do personagem pelo valor da habilidade do usuário.
   - Eleve o resultado ao quadrado.
   - Some todos os resultados quadrados.
   - Extraia a raiz quadrada da soma para obter a distância final.

3. **Determinação do Personagem Mais Próximo:**
   - Calcule a distância para todos os personagens.
   - O personagem com a menor distância é considerado o mais próximo das habilidades do usuário e, portanto, o resultado final do quiz.

**Exemplo:**

Suponha que o usuário tenha as seguintes habilidades:

- Ninjutsu: 4
- Taijutsu: 3
- Genjutsu: 2
- Inteligência: 5
- Força: 4
- Velocidade: 3
- Stamina: 4
- Especial: 5

E dois personagens possuem as seguintes habilidades:

- **Naruto Uzumaki:**
  - Ninjutsu: 5
  - Taijutsu: 4
  - Genjutsu: 3
  - Inteligência: 4
  - Força: 5
  - Velocidade: 4
  - Stamina: 5
  - Especial: 5

- **Sasuke Uchiha:**
  - Ninjutsu: 5
  - Taijutsu: 3
  - Genjutsu: 4
  - Inteligência: 5
  - Força: 4
  - Velocidade: 5
  - Stamina: 4
  - Especial: 4

**Cálculo da Distância para Naruto:**

\[
\sqrt{(4-5)^2 + (3-4)^2 + (2-3)^2 + (5-4)^2 + (4-5)^2 + (3-4)^2 + (4-5)^2 + (5-5)^2} = \sqrt{1 + 1 + 1 + 1 + 1 + 1 + 1 + 0} = \sqrt{7} \approx 2.6458
\]

**Cálculo da Distância para Sasuke:**

\[
\sqrt{(4-5)^2 + (3-3)^2 + (2-4)^2 + (5-5)^2 + (4-4)^2 + (3-5)^2 + (4-4)^2 + (5-4)^2} = \sqrt{1 + 0 + 4 + 0 + 0 + 4 + 0 + 1} = \sqrt{10} \approx 3.1623
\]

**Conclusão:**

- **Naruto** tem uma distância menor (≈2.6458) comparado a **Sasuke** (≈3.1623).
- Portanto, **Naruto Uzumaki** é o personagem mais próximo das habilidades do usuário.

---

## Estrutura do Projeto

```
naruto-quiz/
├── client
│   ├── eslint.config.js
│   ├── index.html
│   ├── jsconfig.json
│   ├── LICENSE
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   └── favicon.ico
│   ├── src
│   │   ├── App.vue
│   │   ├── components
│   │   │   ├── AbilitiesChart.vue
│   │   │   ├── AbilityInput.vue
│   │   │   ├── CharacterProfile.vue
│   │   │   ├── OptionInput.vue
│   │   │   ├── Option.vue
│   │   │   ├── ProgressBar.vue
│   │   │   ├── Question.vue
│   │   │   └── RetakeQuizButton.vue
│   │   ├── main.js
│   │   ├── router
│   │   │   └── index.js
│   │   └── views
│   │       ├── CharacterForm.vue
│   │       ├── QuestionForm.vue
│   │       ├── Quiz.vue
│   │       └── Result.vue
│   └── vite.config.js
├── README.md
└── server
    ├── config
    │   └── config.json
    ├── database.sqlite3
    ├── migrations
    │   ├── 20241026001933-create-character.js
    │   ├── 20241026003544-create-option.js
    │   └── 20241026003654-create-question.js
    ├── models
    │   ├── character.js
    │   ├── index.js
    │   ├── option.js
    │   └── question.js
    ├── package.json
    ├── package-lock.json
    ├── seeders
    │   ├── 20241026001953-seed-characters.js
    │   └── 20241026003815-seed-questions.js
    └── server.js
```

---

## Contribuição

Contribuições são bem-vindas! Se você tem sugestões, melhorias ou encontrou algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request seguindo o padrão do GitHub.

### Passos para Contribuir

1. **Fork o Repositório**

   Clique no botão "Fork" na página do repositório para criar uma cópia do projeto na sua conta do GitHub.

2. **Clone o Repositório Forked**

   ```bash
   git clone https://github.com/seu-usuario/naruto-quiz.git
   cd naruto-quiz
   ```

3. **Crie uma Nova Branch**

   Crie uma branch para sua feature ou correção de bug.

   ```bash
   git checkout -b feature/nomedaseufeature
   ```

4. **Faça as Alterações Necessárias**

   Implemente suas mudanças no código.

5. **Commit as Suas Alterações**

   Faça commit das suas alterações com uma mensagem clara.

   ```bash
   git commit -m "Descrição das mudanças realizadas"
   ```

6. **Push para a Branch no GitHub**

   Envie sua branch para o repositório forked no GitHub.

   ```bash
   git push origin feature/nomedaseufeature
   ```

7. **Abra um Pull Request**

   Vá para o repositório original e abra um Pull Request a partir da sua branch. Descreva detalhadamente as alterações que você fez e o propósito delas.

   **Nota:** Este processo segue o padrão do GitHub para Pull Requests (PR), garantindo uma integração suave e revisão eficiente do seu código.

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

## Agradecimentos

- [Vue.js](https://vuejs.org/)
- [BootstrapVue 3](https://bootstrap-vue-3.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Naruto](https://www.naruto.com/)
- [API Externa de Imagens de Personagens](https://narutodb.xyz/)
- [Sequelize ORM](https://sequelize.org/)

---

## Contato

Para quaisquer dúvidas ou feedback, por favor, entre em contato.
