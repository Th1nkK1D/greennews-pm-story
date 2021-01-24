<template>
  <a :href="href">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    href() {
      return `${process.env.BASE_PATH}${this.localePath(`/#${this.to}`)}`
    },
  },
}
</script>
