<template>
  <div>
    <h2>Cadastrar Novo Personagem</h2>
    <form @submit.prevent="submitForm">
      <label>Nome:</label>
      <input type="text" v-model="character.name" required /><br />

      <label>Descrição:</label>
      <textarea v-model="character.description" required></textarea><br />

      <AbilityInput
        v-for="(ability, index) in abilities"
        :key="index"
        :label="ability.label"
        v-model="character[ability.key]"
      />

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import AbilityInput from '@/components/AbilityInput.vue'

export default {
  name: 'CharacterForm',
  components: { AbilityInput },
  data() {
    return {
      character: {
        name: '',
        description: '',
        ninjutsu: 0,
        taijutsu: 0,
        genjutsu: 0,
        intelligence: 0,
        strength: 0,
        speed: 0,
        stamina: 0,
        special: 0,
      },
      abilities: [
        { label: 'Ninjutsu', key: 'ninjutsu' },
        { label: 'Taijutsu', key: 'taijutsu' },
        { label: 'Genjutsu', key: 'genjutsu' },
        { label: 'Inteligência', key: 'intelligence' },
        { label: 'Força', key: 'strength' },
        { label: 'Velocidade', key: 'speed' },
        { label: 'Stamina', key: 'stamina' },
        { label: 'Especial', key: 'special' },
      ],
    }
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('/api/characters', this.character)
        alert('Personagem cadastrado com sucesso!')
        // Limpar o formulário
        this.character = {
          name: '',
          description: '',
          ninjutsu: 0,
          taijutsu: 0,
          genjutsu: 0,
          intelligence: 0,
          strength: 0,
          speed: 0,
          stamina: 0,
          special: 0,
        }
      } catch (error) {
        console.error('Erro ao cadastrar personagem:', error)
        alert('Erro ao cadastrar personagem.')
      }
    },
  },
}
</script>

<style scoped>
/* Estilos opcionais */
h2 {
  color: #e94e1b;
}
label {
  font-weight: bold;
}
input,
textarea {
  margin-bottom: 10px;
  width: 100%;
}
button {
  background-color: #e94e1b;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
