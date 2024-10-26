<template>
  <div>
    <h2>Você é: {{ character.name }}</h2>
    <img
      :src="character.imageUrl"
      alt="Imagem do personagem"
      v-if="character.imageUrl"
    />
    <p>{{ character.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CharacterProfile',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
h2 {
  color: #e94e1b;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
