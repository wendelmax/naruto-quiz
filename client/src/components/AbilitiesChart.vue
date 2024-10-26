<template>
  <canvas ref="abilitiesChart"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'AbilitiesChart',
  props: {
    abilities: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.abilitiesChart.getContext('2d')
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: [
            'Ninjutsu',
            'Taijutsu',
            'Genjutsu',
            'Inteligência',
            'Força',
            'Velocidade',
            'Stamina',
            'Especial',
          ],
          datasets: [
            {
              label: 'Habilidades',
              data: [
                this.abilities.ninjutsu,
                this.abilities.taijutsu,
                this.abilities.genjutsu,
                this.abilities.intelligence,
                this.abilities.strength,
                this.abilities.speed,
                this.abilities.stamina,
                this.abilities.special,
              ],
              backgroundColor: 'rgba(233, 78, 27, 0.2)',
              borderColor: 'rgba(233, 78, 27, 1)',
            },
          ],
        },
        options: {
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 5,
            },
          },
        },
      })
    },
  },
}
</script>

<style scoped>
/* Estilos opcionais */
</style>
