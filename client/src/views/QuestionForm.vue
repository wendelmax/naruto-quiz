<template>
  <div>
    <h2>Cadastrar Nova Pergunta</h2>
    <form @submit.prevent="submitForm">
      <label>Pergunta:</label>
      <input type="text" v-model="question.text" required /><br />

      <h3>Opções:</h3>
      <OptionInput v-for="(option, index) in question.options" :key="index" :option="option"
        @update:option="updateOption(index, $event)" @remove="removeOption(index)" />

      <button @click.prevent="addOption">Adicionar Opção</button><br /><br />

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import OptionInput from '@/components/OptionInput.vue'

export default {
  name: 'QuestionForm',
  components: { OptionInput },
  data() {
    return {
      question: {
        text: '',
        options: [],
      },
    }
  },
  methods: {
    addOption() {
      this.question.options.push({ text: '', value: '', weight: 0 })
    },
    removeOption(index) {
      this.question.options.splice(index, 1)
    },
    updateOption(index, updatedOption) {
      this.$set(this.question.options, index, updatedOption)
    },
    async submitForm() {
      try {
        // Verificar se pelo menos uma opção foi adicionada
        if (this.question.options.length === 0) {
          alert('Adicione pelo menos uma opção.')
          return
        }
        // Verificar se todas as opções estão preenchidas
        for (const option of this.question.options) {
          if (!option.text || !option.value || option.weight === null) {
            alert('Preencha todos os campos das opções.')
            return
          }
        }
        await axios.post('/api/questions', this.question)
        alert('Pergunta cadastrada com sucesso!')
        // Limpar o formulário
        this.question = {
          text: '',
          options: [],
        }
      } catch (error) {
        console.error('Erro ao cadastrar pergunta:', error)
        alert('Erro ao cadastrar pergunta.')
      }
    },
  },
}
</script>
