<template>
  <label>
    <input
      type="radio"
      :name="'q' + questionId"
      :value="option.id"
      v-model="selectedOption"
    />
    {{ option.text }} </label
  ><br />
</template>

<script>
export default {
  name: 'Option',
  props: {
    option: {
      type: Object,
      required: true,
    },
    questionId: {
      type: [String, Number],
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    selectedOption: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>
