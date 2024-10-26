<template>
  <div>
    <h1>Qual personagem de Naruto é você?</h1>
    <ProgressBar :progress="progress" />

    <!-- Exibir cada pergunta usando o componente Question -->
    <Question
      v-for="question in questions"
      :key="question.id"
      :question="question"
      v-model="answers[question.id]"
    />

    <!-- Botão para calcular o resultado -->
    <button @click="calculateResult">Ver Resultado</button>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import axios from 'axios'
import Question from '@/components/Question.vue'

export default {
  name: 'Quiz',
  components: { Question, ProgressBar },
  data() {
    return {
      questions: [],
      answers: {},
      userAbilities: {
        ninjutsu: 0,
        taijutsu: 0,
        genjutsu: 0,
        intelligence: 0,
        strength: 0,
        speed: 0,
        stamina: 0,
        special: 0,
      },
      characters: [],
    }
  },
  computed: {
    progress() {
      if (this.questions.length === 0) return 0
      const answeredQuestions = Object.keys(this.answers).length
      return (answeredQuestions / this.questions.length) * 100
    },
  },
  methods: {
    async loadCharacterData() {
      try {
        const response = await axios.get('/api/characters')
        this.characters = response.data
      } catch (error) {
        console.error('Erro ao carregar personagens:', error)
      }
    },
    async loadQuestions() {
      try {
        const response = await axios.get('/api/questions')
        this.questions = response.data
      } catch (error) {
        console.error('Erro ao carregar as perguntas:', error)
      }
    },
    calculateResult() {
      // Verificar se todas as perguntas foram respondidas
      for (const question of this.questions) {
        if (!this.answers[question.id]) {
          alert('Por favor, responda todas as perguntas.')
          return
        }
      }

      // Reiniciar habilidades do usuário
      this.userAbilities = {
        ninjutsu: 0,
        taijutsu: 0,
        genjutsu: 0,
        intelligence: 0,
        strength: 0,
        speed: 0,
        stamina: 0,
        special: 0,
      }

      // Processar respostas e incrementar habilidades com base nos pesos
      for (const question of this.questions) {
        const selectedOptionId = this.answers[question.id]
        const selectedOption = question.Options.find(
          option => option.id === parseInt(selectedOptionId),
        )

        if (selectedOption) {
          const ability = selectedOption.value // Ex: 'ninjutsu'
          const weight = selectedOption.weight // Ex: 2
          if (this.userAbilities.hasOwnProperty(ability)) {
            this.userAbilities[ability] += weight
          }
        }
      }

      // Normalizar habilidades do usuário (máximo 5)
      for (let key in this.userAbilities) {
        if (this.userAbilities[key] > 5) {
          this.userAbilities[key] = 5
        }
      }

      // Comparar habilidades e encontrar o personagem mais próximo
      let closestCharacter = null
      let smallestDistance = Infinity

      this.characters.forEach(character => {
        let distance = this.calculateDistance(this.userAbilities, character)
        if (distance < smallestDistance) {
          smallestDistance = distance
          closestCharacter = character
        }
      })
      console.log('Personagem mais próximo:', closestCharacter)
      // Navegar para a tela de resultado com o personagem encontrado
      if (closestCharacter) {
        this.$router.push({
          name: 'Result',
          params: { characterId: closestCharacter.id },
        })
      } else {
        alert('Desculpe, não foi possível determinar seu personagem.')
      }
    },
    calculateDistance(userAbil, character) {
      let sum = 0
      sum += Math.pow(userAbil.ninjutsu - character.ninjutsu, 2)
      sum += Math.pow(userAbil.taijutsu - character.taijutsu, 2)
      sum += Math.pow(userAbil.genjutsu - character.genjutsu, 2)
      sum += Math.pow(userAbil.intelligence - character.intelligence, 2)
      sum += Math.pow(userAbil.strength - character.strength, 2)
      sum += Math.pow(userAbil.speed - character.speed, 2)
      sum += Math.pow(userAbil.stamina - character.stamina, 2)
      sum += Math.pow(userAbil.special - character.special, 2)
      return Math.sqrt(sum)
    },
  },
  mounted() {
    this.loadCharacterData()
    this.loadQuestions()
  },
}
</script>

<style scoped>
/* Estilos opcionais */
h1 {
  color: #e94e1b;
  text-align: center;
}
button {
  background-color: #e94e1b;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
