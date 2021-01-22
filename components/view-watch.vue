<template>
  <div><slot /></div>
</template>

<script>
import enterView from 'enter-view'

export default {
  props: {
    offset: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    enterView({
      selector: [this.$el],
      enter: () => this.$emit('enter'),
      exit: () => this.$emit('exit'),
      offset: 0.5,
    })
  },
}
</script>
