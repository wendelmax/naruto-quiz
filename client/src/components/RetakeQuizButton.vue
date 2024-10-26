<template>
  <button @click="$emit('retake')">Refazer Quiz</button>
</template>

<script>
export default {
  name: 'RetakeQuizButton',
}
</script>

<style scoped>
button {
  background-color: #e94e1b;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
