<template>
  <div class="relative flex flex-col min-h-screen overflow-hidden">
    <ProgressBar class="fixed left-0 right-0 z-10" :progress="readProgress" />
    <LanguageSwitch class="absolute top-4 right-4 md:top-8 md:right-8 z-10" />
    <Intro />
    <Part1 />
    <Part2 />
    <Part3 />
    <Ending />
    <Footer />
    <Sharer outlined class="fixed bottom-8 left-8" />
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
