<template>
  <div class="p-4">
    <LanguageSwitch class="text-right" />
    <div class="text-72 font-bold">{{ $t('intro.title') }}</div>
    <pre>{{ $t('calltoaction') }}</pre>
  </div>
</template>

<style>
html {
  @apply font-sans;
  @apply text-18;
}
</style>
