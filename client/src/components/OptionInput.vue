<template>
  <div>
    <label>Texto da Opção:</label>
    <input type="text" v-model="localOption.text" required /><br />

    <label>Valor da Habilidade:</label>
    <select v-model="localOption.value" required>
      <option value="">Selecione uma habilidade</option>
      <option value="ninjutsu">Ninjutsu</option>
      <option value="taijutsu">Taijutsu</option>
      <option value="genjutsu">Genjutsu</option>
      <option value="intelligence">Inteligência</option>
      <option value="strength">Força</option>
      <option value="speed">Velocidade</option>
      <option value="stamina">Stamina</option>
      <option value="special">Especial</option></select
    ><br />

    <label>Peso:</label>
    <input
      type="number"
      v-model="localOption.weight"
      min="0"
      max="5"
      required
    /><br />

    <button @click.prevent="$emit('remove')">Remover Opção</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'OptionInput',
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  emits: ['update:option', 'remove'],
  data() {
    return {
      localOption: { ...this.option },
    }
  },
  watch: {
    localOption: {
      deep: true,
      handler(newVal) {
        this.$emit('update:option', newVal)
      },
    },
    option: {
      deep: true,
      handler(newVal) {
        this.localOption = { ...newVal }
      },
    },
  },
}
</script>

<style scoped>
label {
  font-weight: bold;
}
input,
select {
  margin-bottom: 10px;
  width: 100%;
}
button {
  background-color: #e94e1b;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}
hr {
  margin: 10px 0;
}
</style>
