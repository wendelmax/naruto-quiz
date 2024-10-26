// Boas práticas aplicadas: modularização de código, melhor tratamento de erros, refatoração de lógica redundante e clareza de funções

const express = require("express");
const cors = require("cors");
const db = require("./models");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

// Importar os modelos
const { Character, Question, Option } = db;

// Função para obter URL da imagem a partir da API externa
const fetchCharacterImageUrl = async (characterName) => {
  try {
    const apiUrl = `https://narutodb.xyz/api/character/search?name=${encodeURIComponent(
      characterName
    )}`;
    const response = await axios.get(apiUrl);
    if (response.data && response.data.images) {
      const randomIndex = Math.floor(
        Math.random() * response.data.images.length
      );
      return response.data.images[randomIndex];
    }
  } catch (error) {
    console.error("Erro ao buscar imagem na API externa:", error.message);
  }
  return ""; // Retorna uma string vazia em caso de erro
};

// Endpoint para obter os personagens
app.get("/api/characters", async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    res.status(500).json({ error: "Erro ao buscar personagens" });
  }
});

// Endpoint para obter um personagem pelo ID
app.get("/api/characters/:id", async (req, res) => {
  try {
    const characterId = req.params.id;
    const character = await Character.findByPk(characterId);
    if (!character) {
      return res.status(404).json({ error: "Personagem não encontrado" });
    }

    const imageUrl = await fetchCharacterImageUrl(character.name);
    const characterWithImage = {
      ...character.toJSON(),
      imageUrl,
    };

    res.json(characterWithImage);
  } catch (error) {
    console.error("Erro ao buscar personagem:", error.message);
    res.status(500).json({ error: "Erro ao buscar personagem" });
  }
});

// Endpoint para obter as perguntas com as opções
app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [{ model: Option, as: "Options" }],
    });
    res.json(questions);
  } catch (error) {
    console.error("Erro ao buscar perguntas:", error);
    res.status(500).json({ error: "Erro ao buscar perguntas" });
  }
});

// Endpoint para cadastrar nova pergunta com opções
app.post("/api/questions", async (req, res) => {
  try {
    const { text, options } = req.body;
    const question = await Question.create({ text });

    const optionsData = options.map((option) => ({
      ...option,
      questionId: question.id,
    }));
    await Option.bulkCreate(optionsData);

    res.status(201).json({ message: "Pergunta criada com sucesso!" });
  } catch (error) {
    console.error("Erro ao criar pergunta:", error);
    res.status(500).json({ error: "Erro ao criar pergunta" });
  }
});

// Endpoint para cadastrar novo personagem
app.post("/api/characters", async (req, res) => {
  try {
    const characterData = req.body;
    await Character.create(characterData);
    res.status(201).json({ message: "Personagem criado com sucesso!" });
  } catch (error) {
    console.error("Erro ao criar personagem:", error);
    res.status(500).json({ error: "Erro ao criar personagem" });
  }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
