<template>
  <div class="p-4">
    <p class="text-right">
      switch to
      <nuxt-link
        class="text-blue-600 hover:underline"
        :to="switchLocalePath(inactiveLanguage)"
      >
        {{ inactiveLanguage.toUpperCase() }}
      </nuxt-link>
    </p>
    <div class="text-3xl font-bold">{{ $t('intro.title') }}</div>
    <pre>{{ $t('calltoaction') }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    inactiveLanguage() {
      return this.$i18n.locales.find((locale) => locale !== this.$i18n.locale)
    },
  },
})
</script>
