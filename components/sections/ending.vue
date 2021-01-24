<template>
  <div class="bg-green-3 py-12 md:py-24 px-4">
    <div
      class="max-w-4xl mx-auto flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0"
    >
      <div class="flex-1 text-center space-y-6">
        <p class="text-h4 font-bold text-green-1">
          {{ $t('chapter3.action2.title') }}
        </p>
        <Parse t="chapter3.action2.content" class="text-h6" />
        <a
          class="inline-block bg-green-1 rounded py-4 px-6 text-white hover:bg-green-2"
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
        <p class="text-h4 mx-auto">{{ $t('chapter3.action3') }}</p>
        <Sharer class="mx-auto" />
      </div>
    </div>
  </div>
</template>
