<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.progress-bar {
  width: 100%;
  background-color: #eee;
  height: 20px;
  border-radius: 10px;
}
.progress-bar__fill {
  height: 100%;
  background-color: #e94e1b;
  width: 0;
  border-radius: 10px;
}
</style>
