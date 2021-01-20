<template>
  <div
    class="flex"
    :class="horizontal ? 'flex-row horizontal' : 'flex-col vertical'"
  >
    <p class="quote">“</p>
    <slot />
    <p class="quote text-right">”</p>
  </div>
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.quote {
  @apply text-green-3;
  font-size: 288px;
}

.vertical > .quote {
  margin: -80px -40px -260px;
}

.horizontal > .quote {
  margin: auto 0;
}
</style>
