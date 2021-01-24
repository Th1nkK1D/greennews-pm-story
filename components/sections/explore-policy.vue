<template>
  <section
    id="action"
    class="flex flex-col space-y-24 md:space-y-48 py-24 md:py-48 px-4"
  >
    <div class="text-center text-green-1">
      <h1 class="text-h2 md:text-h1">{{ $t('chapter3.title') }}</h1>
      <p class="text-h5">{{ $t('chapter3.action1.title') }}</p>
    </div>
    <div class="space-y-8 w-full max-w-4xl mx-auto">
      <div>
        <p class="text-h6">{{ $t('chapter3.action1.presubtitle') }}</p>
        <p class="text-h3">{{ $t('chapter3.action1.subtitle') }}</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 -m-1 md:m-0">
        <AnchorLink
          v-for="character in [1, 2, 3, 4, 5, 6]"
          :key="character"
          to="policy"
          class="flex"
          @click="$refs.policyTable.updateCharacter(character)"
        >
          <CharacterButton :character="character" />
        </AnchorLink>
      </div>
    </div>
    <div id="policy" class="pt-12 space-y-8 md:space-y-12 max-w-4xl mx-auto">
      <PolicyTable ref="policyTable" class="w-full max-w-4xl mx-auto" />
      <Parse t="chapter3.action1.database.source" class="text-body2" />
    </div>
  </section>
</template>
