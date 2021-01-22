<template>
  <div class="bg-green-3 py-12 md:py-24 px-4">
    <div
      class="max-w-4xl mx-auto flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0"
    >
      <div class="flex-1 text-center space-y-6">
        <h4 class="text-h4 font-bold text-green-1">
          {{ $t('chapter3.action2.title') }}
        </h4>
        <Parse t="chapter3.action2.content" class="text-h6" />
        <a
          class="inline-block bg-green-1 rounded p-2 text-white"
          href="https://thaicleanair.org/ร่วมลงชื่อเสนอร่าง-พรบ"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t('chapter3.action2.button') }}
        </a>
      </div>
      <div
        class="flex-1 flex flex-col space-y-6 text-center font-bold text-green-1"
      >
        <h4 class="text-h4 mx-auto">{{ $t('chapter3.action3') }}</h4>
        <Sharer class="mx-auto" />
      </div>
    </div>
  </div>
</template>
