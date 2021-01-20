<template>
  <section class="flex flex-col bg-black text-white space-y-48 py-48 px-4">
    <PartLabel class="-my-24">{{ $t('chapter2.name') }}</PartLabel>
    <div class="space-y-12">
      <h4 class="text-h4 text-center max-w-xl mx-auto">
        {{ $t('chapter2.coreprob.title') }}
      </h4>
      <div class="flex flex-row space-x-4 max-w-4xl mx-auto">
        <div
          v-for="coreprob in [
            'coreprob1',
            'coreprob2',
            'coreprob3',
            'coreprob4',
          ]"
          :key="coreprob"
          class="flex flex-col flex-1"
        >
          <img
            src="https://via.placeholder.com/200x150"
            alt=""
            class="w-full"
          />
          <div
            class="flex-1 p-3 pt-2 space-y-1 text-black bg-green-4 rounded-b-xl"
          >
            <h5 class="text-h5">
              {{ $t(`chapter2.${coreprob}.title`) }}
            </h5>
            <p>{{ $t(`chapter2.${coreprob}.content`) }}</p>
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
      <div class="flex-1">{{ $t('chapter2.coreprob.quote.content') }}</div>
    </div>
    <div class="flex py-48">
      <p class="m-auto text-h4">
        {{ $t('chapter2.link') }}
      </p>
    </div>
  </section>
</template>
