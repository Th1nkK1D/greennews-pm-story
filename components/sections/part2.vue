<template>
  <section class="flex flex-col bg-black text-white space-y-48 py-48 px-4">
    <PartLabel class="-my-24">รู้จักปัญหา: หน้าตา</PartLabel>
    <div class="space-y-12">
      <h4 class="text-h4 text-center max-w-xl mx-auto">
        {{ $t('chapter2.coreprob.title') }}
      </h4>
      <div class="flex flex-row space-x-4 max-w-3xl mx-auto">
        <p
          v-for="item in [
            'chapter2.coreprob1',
            'chapter2.coreprob2',
            'chapter2.coreprob3',
            'chapter2.coreprob4',
          ]"
          :key="item"
          class="flex-1"
        >
          <img
            src="https://via.placeholder.com/200x150"
            alt=""
            class="w-full mb-4"
          />
          {{ $t(item) }}
        </p>
      </div>
    </div>
    <h4 class="text-h4 text-center max-w-2xl mx-auto">
      {{ $t('chapter2.coreprob.body') }}
    </h4>
    <div class="flex flex-row max-w-3xl mx-auto space-x-20">
      <img src="https://via.placeholder.com/250" alt="" />
      <div class="flex-1">{{ $t('chapter2.coreprob.quote') }}</div>
    </div>
    <div class="flex py-48">
      <p class="m-auto text-h4">
        {{ $t('chapter2.link') }}
      </p>
    </div>
  </section>
</template>
