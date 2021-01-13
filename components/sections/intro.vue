<template>
  <section class="flex flex-col">
    <!-- Landing -->
    <div class="h-screen flex">
      <div class="max-w-lg m-auto text-center">
        <h2 class="text-36">{{ $t('intro.subtitle') }}</h2>
        <h1 class="text-72 font-bold">{{ $t('intro.title') }}</h1>
      </div>
    </div>
    <!-- End of Landing -->
    <div ref="enterView">test enter view</div>
  </section>
</template>

<script>
import enterView from 'enter-view'

export default {
  mounted() {
    enterView({
      selector: [this.$refs.enterView],
      enter() {
        console.log('enter')
      },
    })
  },
}
</script>
