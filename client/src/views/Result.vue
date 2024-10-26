<template>
  <div v-if="character">
    <CharacterProfile :character="character" :characterImage="characterImage" />
    <AbilitiesChart :abilities="characterAbilities" />
    <RetakeQuizButton @retake="retakeQuiz" />
  </div>
  <div v-else>
    <p>Carregando...</p>
  </div>
</template>

<script>
import axios from 'axios';
import CharacterProfile from '@/components/CharacterProfile.vue';
import AbilitiesChart from '@/components/AbilitiesChart.vue';
import RetakeQuizButton from '@/components/RetakeQuizButton.vue';

export default {
  name: 'Result',
  components: {
    CharacterProfile,
    AbilitiesChart,
    RetakeQuizButton,
  },
  props: {
    characterId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      character: null,
    };
  },
  computed: {
    characterAbilities() {
      if (!this.character) return {};
      return {
        ninjutsu: this.character.ninjutsu,
        taijutsu: this.character.taijutsu,
        genjutsu: this.character.genjutsu,
        intelligence: this.character.intelligence,
        strength: this.character.strength,
        speed: this.character.speed,
        stamina: this.character.stamina,
        special: this.character.special,
      };
    },
  },
  methods: {
    retakeQuiz() {
      this.$router.push({ name: 'Quiz' });
    },
    async fetchCharacter() {
      try {
        const response = await axios.get(`/api/characters/${this.characterId}`);
        this.character = response.data;
        console.log(response.data)
      } catch (error) {
        console.error('Erro ao carregar personagem:', error);
      }
    },
  },
  mounted() {
    this.fetchCharacter();
  },
};
</script>


<style scoped>
h2 {
  color: #e94e1b;
}
button {
  background-color: #e94e1b;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
