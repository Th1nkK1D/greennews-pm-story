<template>
  <section
    class="flex flex-col text-white space-y-24 md:space-y-48 py-24 md:py-48 px-4"
  >
    <PartLabel class="md:-my-24">{{ $t('chapter2.name') }}</PartLabel>
    <div class="space-y-12">
      <h4 class="text-h4 text-center max-w-xl mx-auto">
        {{ $t('chapter2.coreprob.title') }}
      </h4>
      <div
        ref="coreProblems"
        class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-4xl mx-auto"
      >
        <div
          v-for="{ coreprob, img } in [
            {
              coreprob: 'coreprob1',
              img: require('~/assets/images/ch2-01.png'),
            },
            {
              coreprob: 'coreprob2',
              img: require('~/assets/images/ch2-02.png'),
            },
            {
              coreprob: 'coreprob3',
              img: require('~/assets/images/ch2-03.png'),
            },
            {
              coreprob: 'coreprob4',
              img: require('~/assets/images/ch2-04.png'),
            },
          ]"
          :key="coreprob"
          class="flex flex-col flex-1 rounded-xl overflow-hidden"
        >
          <img :src="img" alt="" class="w-full" />
          <div class="flex-1 p-3 pt-2 space-y-1 text-black bg-green-4">
            <p class="text-h5 font-bold">
              {{ $t(`chapter2.${coreprob}.title`) }}
            </p>
            <Parse :t="`chapter2.${coreprob}.content`" />
          </div>
        </div>
      </div>
    </div>
    <h4 class="text-h4 text-center max-w-2xl mx-auto">
      {{ $t('chapter2.coreprob.body') }}
    </h4>
    <div
      class="flex flex-col-reverse md:flex-row max-w-4xl mx-auto md:space-x-20"
    >
      <div
        class="flex flex-row md:flex-col md:space-y-4 space-x-2 md:space-x-0 my-auto"
      >
        <img
          src="~/assets/images/people-buaros.png"
          alt="Buaros"
          class="w-36 h-36 md:w-80 md:h-80 rounded-full"
        />
        <p class="mt-auto">{{ $t('chapter2.coreprob.quote.source') }}</p>
      </div>
      <QuoteBlock class="flex-1 mx-4 md:mx-0">
        <Parse t="chapter2.coreprob.quote.content" />
      </QuoteBlock>
    </div>
    <div class="flex py-24 md:py-48">
      <Parse t="chapter2.link" class="m-auto text-h4 text-center" />
    </div>
  </section>
</template>

<script>
import { fadeChildrenOnEnter } from '~/utils/animation'

export default {
  mounted() {
    fadeChildrenOnEnter(this.$refs.coreProblems)
  },
}
</script>

<style scoped>
section {
  background: url('../../assets/images/bg-dust.png');
  @apply bg-no-repeat;
  @apply bg-cover;
}
</style>
