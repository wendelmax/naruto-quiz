<template>
  <div>
    <label>{{ label }}:</label>
    <input type="number" v-model="inputValue" min="0" max="5" required /><br />
  </div>
</template>

<script>
export default {
  name: 'AbilityInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    inputValue: {
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
