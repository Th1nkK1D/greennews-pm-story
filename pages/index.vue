<template>
  <div
    class="relative flex flex-col min-h-screen overflow-hidden transition-colors duration-1000 ease-in-out"
    :class="bgColor"
  >
    <ProgressBar class="fixed left-0 right-0 z-10" :progress="readProgress" />
    <img
      src="~/assets/images/logo-greennews.png"
      alt="Greennews"
      class="absolute top-4 left-4 md:top-8 md:left-8 z-10"
    />
    <LanguageSwitch class="absolute top-4 right-4 md:top-8 md:right-8 z-10" />
    <Intro />
    <ViewWatch @enter="bgColor = 'bg-white'" @exit="bgColor = ''">
      <MotorcyclerStory />
    </ViewWatch>
    <ViewWatch @enter="bgColor = 'bg-black-3'" @exit="bgColor = 'bg-white'">
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
      densed
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
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        { property: 'og:title', content: this.$t('intro.title') },
        {
          name: 'description',
          content: this.$t('page.description'),
        },
        { property: 'og:description', content: this.$t('page.description') },
        {
          property: 'og:image',
          content: `${process.env.SITE_URL}/og-${this.$i18n.locale}.jpg`,
        },
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
}

body {
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
}

ul {
  @apply list-disc;
  @apply ml-6;
}

.text-indent {
  text-indent: 2em;
}
</style>
