<template>
  <section class="flex flex-col bg-black text-white space-y-48 py-48 px-4">
    <PartLabel class="-my-24">{{ $t('chapter2.name') }}</PartLabel>
    <div class="space-y-12">
      <h4 class="text-h4 text-center max-w-xl mx-auto">
        {{ $t('chapter2.coreprob.title') }}
      </h4>
      <div class="flex flex-row space-x-4 max-w-4xl mx-auto">
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
          class="flex flex-col flex-1"
        >
          <img :src="img" alt="" class="w-full" />
          <div
            class="flex-1 p-3 pt-2 space-y-1 text-black bg-green-4 rounded-b-xl"
          >
            <h5 class="text-h5 font-bold">
              {{ $t(`chapter2.${coreprob}.title`) }}
            </h5>
            <Parse :t="`chapter2.${coreprob}.content`" />
          </div>
        </div>
      </div>
    </div>
    <h4 class="text-h4 text-center max-w-2xl mx-auto">
      {{ $t('chapter2.coreprob.body') }}
    </h4>
    <div class="flex flex-row max-w-3xl mx-auto space-x-20">
      <div class="space-y-2">
        <img src="https://via.placeholder.com/250" alt="" />
        <p class="">{{ $t('chapter2.coreprob.quote.source') }}</p>
      </div>
      <QuoteBlock class="flex-1">
        <Parse t="chapter2.coreprob.quote.content" />
      </QuoteBlock>
    </div>
    <div class="flex py-48">
      <Parse t="chapter2.link" class="m-auto text-h4" />
    </div>
  </section>
</template>
