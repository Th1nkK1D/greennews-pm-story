<template>
  <section class="flex flex-col space-y-24 md:space-y-48 py-24 md:py-48 px-4">
    <PartLabel class="md:-my-24">{{ $t('chapter3.name') }}</PartLabel>
    <Parse
      t="chapter3.solution.title"
      class="text-h4 max-w-xl mx-auto text-center"
    />
    <div
      class="flex flex-col md:grid grid-cols-2 w-full max-w-2xl mx-auto space-y-8 md:space-y-0"
    >
      <div class="md:col-span-2 md:p-8">
        {{ $t('chapter3.solution.body1') }}
      </div>
      <div
        v-for="({ purpose, img }, index) in [
          { purpose: 'purpose1', img: require('~/assets/images/ch3-01.png') },
          { purpose: 'purpose2', img: require('~/assets/images/ch3-02.png') },
          { purpose: 'purpose3', img: require('~/assets/images/ch3-03.png') },
          { purpose: 'purpose4', img: require('~/assets/images/ch3-04.png') },
        ]"
        :key="purpose"
        class="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-2 md:p-8"
      >
        <img
          :src="img"
          :alt="`chapter3.solution.${purpose}`"
          class="rounded-full w-24 m-auto md:m-0"
        />
        <div>
          <p class="text-h3 font-bold">{{ index + 1 }}.</p>
          <Parse :t="`chapter3.solution.${purpose}`" />
        </div>
      </div>

      <div class="col-span-2 flex justify-end">
        <Parse t="chapter3.solution.source" class="text-body2" />
      </div>
    </div>
    <div class="text-center space-y-12">
      <Parse t="chapter3.solution.body2" class="text-h6 max-w-3xl mx-auto" />
      <Parse
        t="chapter3.scenario.title"
        class="text-h3 md:text-h3 max-w-4xl mx-auto text-green-1"
      />
      <Parse
        t="chapter3.scenario.body1"
        class="text-h4 md:text-h5 max-w-3xl mx-auto"
      />
    </div>
    <div ref="timelines" class="flex flex-col max-w-2xl mx-auto">
      <div
        v-for="(timeline, index) in [
          'timeline1',
          'timeline2',
          'timeline3',
          'timeline4',
          'timeline5',
        ]"
        :key="timeline"
        class="flex flex-row space-x-4"
      >
        <div class="flex flex-col">
          <div
            class="flex-1 mx-auto"
            :class="{ 'bg-green-1 ': index > 0 }"
            style="width: 2px"
          />
          <div class="rounded-full w-3 h-3 bg-green-1 m-auto" />
          <div
            class="flex-1 mx-auto"
            :class="{ 'bg-green-1 ': index < 4 }"
            style="width: 2px"
          />
        </div>
        <Parse :t="`chapter3.scenario.${timeline}`" class="flex-1 py-4" />
      </div>
      <Parse t="chapter3.scenario.note" class="text-body2 pt-4" />
    </div>
    <div class="max-w-4xl mx-auto space-y-20">
      <p class="text-h4 md:text-h3">{{ $t('chapter3.opinion.title') }}</p>
      <div class="flex flex-col md:flex-row md:space-x-20">
        <QuoteBlock class="flex-1 mx-4 md:mx-0">
          <Parse t="chapter3.opinion1.content" />
        </QuoteBlock>
        <div
          class="flex flex-row md:flex-col md:space-y-4 space-x-2 md:space-x-0 my-auto"
        >
          <img
            src="~/assets/images/people-supakit.png"
            alt=""
            class="w-36 h-36 md:w-80 md:h-80 rounded-full"
          />
          <p class="mt-auto w-36 md:w-80">
            {{ $t('chapter3.opinion1.source') }}
          </p>
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row md:space-x-20">
        <div
          class="flex flex-row md:flex-col md:space-y-4 space-x-2 md:space-x-0 my-auto"
        >
          <img
            src="~/assets/images/people-attapon.png"
            alt=""
            class="w-36 h-36 md:w-80 md:h-80 rounded-full"
          />
          <p class="mt-auto w-36 md:w-80">
            {{ $t('chapter3.opinion2.source') }}
          </p>
        </div>
        <QuoteBlock class="flex-1 mx-4 md:mx-0">
          <Parse t="chapter3.opinion2.content" />
        </QuoteBlock>
      </div>
    </div>
    <Parse t="chapter3.link1" class="text-h5 max-w-xl mx-auto text-center" />
    <QuoteBlock horizontal class="hidden md:flex max-w-4xl mx-auto">
      <div class="flex-col space-y-8">
        <Parse t="chapter3.opinion3" class="text-h6 text-center" />
        <Parse t="chapter3.opinion3.source" class="text-body2 text-right" />
      </div>
    </QuoteBlock>
    <QuoteBlock class="md:hidden">
      <div class="flex-col space-y-8">
        <Parse t="chapter3.opinion3" class="text-h6 text-center" />
        <Parse t="chapter3.opinion3.source" class="text-body2 text-right" />
      </div>
    </QuoteBlock>

    <div class="flex py-24 md:py-48">
      <Parse t="chapter3.link2" class="text-h4 max-w-xl mx-auto text-center" />
    </div>
  </section>
</template>

<script>
import { fadeChildrenOnEnter } from '~/utils/animation'

export default {
  mounted() {
    fadeChildrenOnEnter(this.$refs.timelines)
  },
}
</script>

<style scoped>
section {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #c7dedd 100%);
}
</style>
