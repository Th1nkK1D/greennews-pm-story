<template>
  <section class="flex flex-col bg-black-4 py-48 space-y-48">
    <div class="p-2 bg-green-3 text-green-1 text-h6 font-bold mx-auto -my-24">
      รู้จักปัญหา: หน้าตา
    </div>
    <div class="space-y-24">
      <img
        src="https://via.placeholder.com/800x400?text=motocycler_illustration"
        alt=""
        class="w-full max-w-2xl m-auto"
      />
      <div class="max-w-lg m-auto space-y-8">
        <p class="text-indent">{{ $t('chapter1.story1') }}</p>
        <p class="text-indent">{{ $t('chapter1.story2') }}</p>
        <p class="text-indent">{{ $t('chapter1.story3') }}</p>
      </div>
    </div>
    <div class="space-y-24">
      <img
        src="https://via.placeholder.com/800x400?text=pm2.5_illustration"
        alt=""
        class="w-full max-w-2xl m-auto"
      />
      <div class="max-w-lg m-auto space-y-8">
        <p class="text-indent">{{ $t('chapter1.factbox') }}</p>
        <p class="text-indent">{{ $t('chapter1.story4') }}</p>
      </div>
    </div>
    <div class="space-y-4 max-w-2xl m-auto">
      <img
        src="https://via.placeholder.com/800x400?text=pm2.5_heatmap"
        alt=""
        class="w-full"
      />
      <p class="text-right text-body2">
        {{ $t('chapter1.datavisual.source') }}
      </p>
    </div>
  </section>
</template>
