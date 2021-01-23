<template>
  <div
    class="relative flex flex-col min-h-screen overflow-hidden transition-colors duration-1000 ease-in-out"
    :class="bgColor"
  >
    <ProgressBar class="fixed left-0 right-0 z-10" :progress="readProgress" />
    <LanguageSwitch class="absolute top-4 right-4 md:top-8 md:right-8 z-10" />
    <Intro />
    <ViewWatch @enter="bgColor = 'bg-black-4'" @exit="bgColor = ''">
      <MotorcyclerStory />
    </ViewWatch>
    <ViewWatch @enter="bgColor = 'bg-black-3'" @exit="bgColor = 'bg-black-4'">
      <PmInformation />
    </ViewWatch>
    <ViewWatch @enter="bgColor = 'bg-black'" @exit="bgColor = 'bg-black-3'">
      <Problems />
    </ViewWatch>
    <ViewWatch @enter="bgColor = 'bg-white'" @exit="bgColor = 'bg-black'">
      <Solution />
    </ViewWatch>
    <ViewWatch @enter="bgColor = 'bg-green-4'" @exit="bgColor = 'bg-white'">
      <ExplorePolicy />
    </ViewWatch>
    <ViewWatch @enter="showFixedSharer = false" @exit="showFixedSharer = true">
      <Ending />
    </ViewWatch>
    <Footer />
    <Sharer
      v-if="showFixedSharer"
      outlined
      class="hidden md:flex fixed bottom-8 left-8"
    />
  </div>
</template>

<script>
import enterView from 'enter-view'

export default {
  data() {
    return {
      readProgress: 0,
      showFixedSharer: true,
      bgColor: '',
    }
  },
  mounted() {
    enterView({
      selector: [this.$el],
      progress: (el, progress) => (this.readProgress = progress),
    })
  },
  head() {
    return {
      title: this.$t('intro.title'),
      meta: [
        { property: 'og:title', content: this.$t('intro.title') },
        { hid: 'description', name: 'description', content: '' },
        { property: 'og:description', content: '' },
      ],
    }
  },
}
</script>

<style>
html {
  @apply font-sans;
  @apply text-body1;

  scroll-behavior: smooth;
  /* scrollbar-width: none; */
}

body {
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
}

/* ::-webkit-scrollbar {
  display: none;
} */

ul {
  @apply list-disc;
}

.text-indent {
  text-indent: 2em;
}
</style>
