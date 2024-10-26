<template>
  <div>
    <p>{{ question.id }}. {{ question.text }}</p>
    <div v-for="option in question.Options" :key="option.id">
      <Option :option="option" :questionId="question.id" v-model="selectedOption" />
    </div>
  </div>
</template>

<script>
import Option from '@/components/Option.vue'

export default {
  name: 'Question',
  components: { Option },
  props: {
    question: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      selectedOption: this.modelValue,
    }
  },
  watch: {
    selectedOption(newValue) {
      this.$emit('update:modelValue', newValue)
    },
    modelValue(newValue) {
      this.selectedOption = newValue
    },
  },
}
</script>
