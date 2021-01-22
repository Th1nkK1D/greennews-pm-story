<template>
  <section
    id="action"
    class="flex flex-col space-y-24 md:space-y-48 py-24 md:py-48 px-4"
  >
    <div class="text-center text-green-1">
      <h1 class="text-h2 md:text-h1">{{ $t('chapter3.title') }}</h1>
      <h5 class="text-h5">{{ $t('chapter3.action1.title') }}</h5>
    </div>
    <div class="space-y-8 w-full max-w-4xl mx-auto">
      <div>
        <h6 class="text-h6">{{ $t('chapter3.action1.presubtitle') }}</h6>
        <h3 class="text-h3">{{ $t('chapter3.action1.subtitle') }}</h3>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 -m-1 md:m-0">
        <a
          v-for="character in [1, 2, 3, 4, 5, 6]"
          :key="character"
          href="#policy"
          class="flex m-1 rounded-xl px-4 py-8 md:px-8 text-center bg-white hover:bg-green-2 hover:text-white"
          @click="$refs.policyTable.updateCharacter(character)"
        >
          <p class="m-auto">
            {{ $t(`chapter3.action1.character${character}`) }}
          </p>
        </a>
      </div>
    </div>
    <div id="policy" class="pt-12">
      <PolicyTable ref="policyTable" class="w-full max-w-4xl mx-auto" />
    </div>
  </section>
</template>
