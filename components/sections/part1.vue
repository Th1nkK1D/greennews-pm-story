<template>
  <section class="flex flex-col bg-gray-2 py-48 space-y-48">
    <div class="space-y-24">
      <img
        src="https://via.placeholder.com/800x400?text=motocycler_illustration"
        alt=""
        class="w-full max-w-2xl m-auto"
      />
      <div class="max-w-lg m-auto space-y-8">
        <p>{{ $t('chapter1.story1') }}</p>
        <p>{{ $t('chapter1.story2') }}</p>
        <p>{{ $t('chapter1.story3') }}</p>
      </div>
    </div>
    <div class="space-y-24">
      <img
        src="https://via.placeholder.com/800x400?text=pm2.5_illustration"
        alt=""
        class="w-full max-w-2xl m-auto"
      />
      <p class="max-w-lg m-auto">{{ $t('chapter1.factbox') }}</p>
    </div>
  </section>
</template>
