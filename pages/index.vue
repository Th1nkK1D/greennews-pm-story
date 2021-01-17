<template>
  <div class="relative flex flex-col min-h-screen">
    <ProgressBar class="fixed left-0 right-0 z-10" :progress="readProgress" />
    <LanguageSwitch class="absolute top-1 right-1 z-10" />
    <Intro />
    <Part1 />
    <Part2 />
    <Footer />
  </div>
</template>

<script>
import enterView from 'enter-view'

export default {
  data() {
    return {
      readProgress: 0,
    }
  },
  mounted() {
    enterView({
      selector: [this.$el],
      progress: (el, progress) => (this.readProgress = progress),
    })
  },
}
</script>

<style>
html {
  @apply font-sans;
  @apply text-body1;
}
</style>
