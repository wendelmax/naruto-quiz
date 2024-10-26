const express = require('express')
const cors = require('cors')
const db = require('./models')
const axios = require('axios')
const app = express()

app.use(cors())
app.use(express.json())

// Importar os modelos
const { Character, Question, Option } = db

// Endpoint para obter os personagens
app.get('/api/characters', async (req, res) => {
  try {
    const characters = await Character.findAll()
    res.json(characters)
  } catch (error) {
    console.error('Erro ao buscar personagens:', error)
    res.status(500).send('Erro ao buscar personagens')
  }
})

// Endpoint para obter um personagem pelo ID
app.get('/api/characters/:id', (req, res) => {
  const characterId = req.params.id

  // Buscar o personagem no banco de dados
  Character.findByPk(characterId)
    .then(character => {
      if (!character) {
        return res.status(404).json({ error: 'Personagem não encontrado' })
      }

      // Fazer a requisição à API externa para obter a URL da imagem
      const apiUrl = `https://narutodb.xyz/api/character/search?name=${encodeURIComponent(character.name)}`

      axios
        .get(apiUrl)
        .then(response => {
          // Verificar se a API retornou resultados
          let imageUrl = ''
          if (response.data) {
            let numeros = [0, 1]
            let indiceAleatorio = Math.floor(Math.random() * numeros.length)
            let numeroAleatorio = numeros[indiceAleatorio]
            imageUrl = response.data.images[numeroAleatorio]
          }

          // Incluir a URL da imagem no objeto do personagem
          const characterWithImage = {
            ...character.toJSON(),
            imageUrl: imageUrl,
          }

          res.json(characterWithImage)
        })
        .catch(error => {
          console.error('Erro ao buscar imagem na API externa:', error.message)
          res.status(500).json({ error: 'Erro ao buscar imagem do personagem' })
        })
    })
    .catch(error => {
      console.error(
        'Erro ao buscar personagem no banco de dados:',
        error.message,
      )
      res.status(500).json({ error: 'Erro ao buscar personagem' })
    })
})

// Endpoint para obter as perguntas com as opções
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [{ model: Option, as: 'Options' }],
    })
    res.json(questions)
  } catch (error) {
    console.error('Erro ao buscar perguntas:', error)
    res.status(500).send('Erro ao buscar perguntas')
  }
})

// Endpoint para cadastrar nova pergunta com opções
app.post('/api/questions', async (req, res) => {
  try {
    const { text, options } = req.body
    const question = await Question.create({ text })
    for (const option of options) {
      await Option.create({
        text: option.text,
        value: option.value,
        weight: option.weight,
        questionId: question.id,
      })
    }
    res.status(201).json({ message: 'Pergunta criada com sucesso!' })
  } catch (error) {
    console.error('Erro ao criar pergunta:', error)
    res.status(500).send('Erro ao criar pergunta')
  }
})

// Endpoint para cadastrar novo personagem
app.post('/api/characters', async (req, res) => {
  try {
    const characterData = req.body
    await Character.create(characterData)
    res.status(201).json({ message: 'Personagem criado com sucesso!' })
  } catch (error) {
    console.error('Erro ao criar personagem:', error)
    res.status(500).send('Erro ao criar personagem')
  }
})

// Iniciar o servidor
const PORT = process.env.PORT || 3000
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
  })
})
