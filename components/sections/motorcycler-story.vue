<template>
  <section
    id="start"
    class="flex flex-col py-24 md:py-48 px-4 space-y-24 md:space-y-48"
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
        <Parse t="chapter1.factbox" class="text-indent" />
      </div>
    </div>
    <div class="space-y-8 w-full max-w-3xl mx-auto">
      <h5 class="text-h5 font-bold">{{ $t('chapter1.datavisual.title') }}</h5>
      <PollutionHeatmap class="w-full" />
      <Parse t="chapter1.datavisual.source" class="text-right text-body2" />
    </div>
    <div class="max-w-xl m-auto">
      <Parse t="chapter1.datavisual.description" />
    </div>
  </section>
</template>
