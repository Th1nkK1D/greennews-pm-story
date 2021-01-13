<template>
  <p class="text-right">
    switch to
    <nuxt-link
      class="text-blue-600 hover:underline"
      :to="switchLocalePath(inactiveLanguage)"
    >
      {{ inactiveLanguage.toUpperCase() }}
    </nuxt-link>
  </p>
</template>

<script>
export default {
  computed: {
    inactiveLanguage() {
      return this.$i18n.locales.find((locale) => locale !== this.$i18n.locale)
    },
  },
}
</script>
