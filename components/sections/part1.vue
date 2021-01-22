<template>
  <section>
    <div
      id="start"
      class="flex flex-col bg-black-4 py-24 md:py-48 px-4 space-y-24 md:space-y-48"
    >
      <PartLabel class="md:-my-24">{{ $t('chapter1.name') }}</PartLabel>
      <div class="space-y-12 md:space-y-24">
        <img
          src="~/assets/images/ch1-01.png"
          alt="Motocycler"
          class="w-full max-w-2xl m-auto"
        />
        <div class="max-w-xl m-auto space-y-8">
          <Parse
            v-for="story in [
              'chapter1.story1',
              'chapter1.story2',
              'chapter1.story3',
            ]"
            :key="story"
            :t="story"
            class="text-indent"
          />
        </div>
      </div>
      <div class="space-y-12 md:space-y-24">
        <img
          src="~/assets/images/ch1-02.png"
          alt="PM2.5"
          class="w-full max-w-2xl m-auto"
        />
        <div class="max-w-xl m-auto space-y-8">
          <Parse
            v-for="t in ['chapter1.factbox', 'chapter1.story4']"
            :key="t"
            :t="t"
            class="text-indent"
          />
        </div>
      </div>
      <div class="space-y-4 w-full max-w-3xl m-auto">
        <h5 class="text-h5 font-bold">{{ $t('chapter1.datavisual') }}</h5>
        <PollutionHeatmap class="w-full" />
        <Parse t="chapter1.datavisual.source" class="text-right text-body2" />
      </div>
    </div>

    <div
      class="flex flex-col bg-black-3 px-4 py-24 md:py-48 space-y-20 md:space-y-40"
    >
      <Parse t="chapter1.fact1" class="text-h6 max-w-xl m-auto text-center" />
      <Parse t="chapter1.link" class="text-h4 text-center" />
      <div class="flex flex-col space-y-20 text-center">
        <p class="text-h5">
          {{ $t('chapter1.whatispm.title') }}
        </p>
        <div class="flex flex-row justify-around w-full max-w-3xl mx-auto">
          <div
            v-for="{ factor, img } in [
              { factor: 'factor1', img: require('~/assets/images/ch1-03.png') },
              { factor: 'factor2', img: require('~/assets/images/ch1-04.png') },
            ]"
            :key="factor"
            class="w-32 md:w-48 text-center"
          >
            <img
              :src="img"
              class="rounded-full mx-auto mb-4"
              :alt="$t(`chapter1.whatispm.${factor}`)"
            />
            <Parse :t="`chapter1.whatispm.${factor}`" />
          </div>
        </div>
        <div class="max-w-xl mx-auto text-center space-y-4">
          <Parse t="chapter1.whatispm.body1" />
          <Parse t="chapter1.whatispm.body2" />
        </div>
      </div>
      <div class="max-w-3xl mx-auto space-y-12">
        <h3 class="text-h3 text-center">
          {{ $t('chapter1.whatwedo.title') }}
        </h3>
        <div
          class="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12"
        >
          <div
            v-for="{ policy, img } in [
              { policy: 'policy1', img: require('~/assets/images/ch1-05.png') },
              { policy: 'policy2', img: require('~/assets/images/ch1-06.png') },
            ]"
            :key="policy"
            class="flex-1"
          >
            <img
              :src="img"
              :alt="$t(`chapter1.whatwedo.${policy}.title`)"
              class="w-full mb-6"
            />
            <h3 class="text-h3 mb-2">
              {{ $t(`chapter1.whatwedo.${policy}.title`) }}
            </h3>
            <Parse :t="`chapter1.whatwedo.${policy}.content`" />
          </div>
        </div>
      </div>
      <div class="space-y-8">
        <img
          src="~/assets/images/ch1-07.png"
          alt="Government declare policy"
          class="w-full max-w-2xl m-auto"
        />
        <div class="max-w-xl m-auto space-y-8">
          <Parse t="chapter1.whatwedo.body2" class="m-auto text-center" />
        </div>
      </div>
      <div class="space-y-20">
        <Parse t="chapter1.whatwedo.body3" class="m-auto text-center" />
        <div class="max-w-2xl m-auto space-y-4">
          <img
            src="~/assets/images/ch1-08.png"
            alt="Thai still not satisfy"
            class="w-full"
          />
          <Parse t="chapter1.whatwedo.source" class="text-body2 text-right" />
        </div>

        <div class="max-w-xl m-auto space-y-8">
          <Parse t="chapter1.whatwedo.body4" class="m-auto text-center" />
        </div>
      </div>
      <div class="flex py-24 md:py-48">
        <Parse t="chapter1.whatwedo.link" class="m-auto text-h3 text-center" />
      </div>
    </div>
  </section>
</template>
