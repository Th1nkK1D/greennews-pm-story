<template>
  <section>
    <div
      class="flex flex-col bg-white space-y-24 md:space-y-48 py-24 md:py-48 px-4"
    >
      <PartLabel class="md:-my-24">{{ $t('chapter3.name') }}</PartLabel>
      <h4 class="text-h4 max-w-xl mx-auto text-center">
        {{ $t('chapter3.solution.title') }}
      </h4>
      <div
        class="flex flex-col md:grid grid-cols-2 w-full max-w-2xl mx-auto space-y-8 md:space-y-0"
      >
        <div class="md:col-span-2 md:p-8">กฎหมายนี้มุ่ง…</div>
        <div
          v-for="({ purpose, img }, index) in [
            { purpose: 'purpose1', img: require('~/assets/images/ch3-01.png') },
            { purpose: 'purpose2', img: require('~/assets/images/ch3-02.png') },
            { purpose: 'purpose3', img: require('~/assets/images/ch3-03.png') },
            { purpose: 'purpose4', img: require('~/assets/images/ch3-04.png') },
          ]"
          :key="purpose"
          class="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-2 md:p-8"
        >
          <img
            :src="img"
            :alt="`chapter3.solution.${purpose}`"
            class="rounded-full w-24 m-auto md:m-0"
          />
          <div>
            <p class="text-h3 font-bold">{{ index + 1 }}.</p>
            <Parse :t="`chapter3.solution.${purpose}`" />
          </div>
        </div>

        <div class="col-span-2 flex justify-end">
          <Parse t="chapter3.solution.source" class="text-body2" />
        </div>
      </div>
      <div class="text-center space-y-12">
        <Parse
          t="chapter3.solution.body2"
          class="text-h5 md:text-h4 max-w-3xl mx-auto"
        />
        <Parse
          t="chapter3.scenario.title"
          class="text-h3 md:text-h3 max-w-4xl mx-auto"
        />
        <Parse
          t="chapter3.scenario.body1"
          class="text-h4 md:text-h5 max-w-3xl mx-auto"
        />
      </div>
      <div class="flex flex-col max-w-2xl mx-auto space-y-8">
        <div
          v-for="timeline in [
            'timeline1',
            'timeline2',
            'timeline3',
            'timeline4',
          ]"
          :key="timeline"
          class="flex flex-row space-x-4"
        >
          <div class="rounded-full w-3 h-3 bg-green-1 m-auto" />
          <Parse :t="`chapter3.scenario.${timeline}`" class="flex-1" />
        </div>
        <Parse t="chapter3.scenario.note" />
      </div>
      <div class="max-w-4xl mx-auto space-y-20">
        <h3 class="text-h4 md:text-h3">{{ $t('chapter3.opinion.title') }}</h3>
        <div class="flex flex-col-reverse md:flex-row md:space-x-20">
          <div
            class="flex flex-row md:flex-col md:space-y-2 space-x-2 md:space-x-0 my-auto"
          >
            <img
              src="https://via.placeholder.com/250"
              alt=""
              class="w-36 md:w-80"
            />
            <p class="mt-auto">{{ $t('chapter3.opinion1.source') }}</p>
          </div>
          <QuoteBlock class="flex-1 mx-4 md:mx-0">
            <Parse t="chapter3.opinion1.content" />
          </QuoteBlock>
        </div>
        <div class="flex flex-col md:flex-row md:space-x-20">
          <QuoteBlock class="flex-1 mx-4 md:mx-0">
            <Parse t="chapter3.opinion2.content" />
          </QuoteBlock>
          <div
            class="flex flex-row md:flex-col md:space-y-2 space-x-2 md:space-x-0 my-auto"
          >
            <img
              src="https://via.placeholder.com/250"
              alt=""
              class="w-36 md:w-80"
            />
            <p class="mt-auto">{{ $t('chapter3.opinion2.source') }}</p>
          </div>
        </div>
      </div>
      <Parse t="chapter3.link" class="text-h5 max-w-xl mx-auto text-center" />
      <QuoteBlock horizontal class="hidden md:flex max-w-4xl mx-auto">
        <Parse t="chapter3.opinion3" class="text-h6 text-center" />
      </QuoteBlock>
      <QuoteBlock class="md:hidden">
        <Parse t="chapter3.opinion3" class="text-h6 text-center" />
      </QuoteBlock>
      <Parse t="chapter3.link" class="text-h4 max-w-xl mx-auto text-center" />
    </div>

    <div
      class="flex flex-col bg-green-4 space-y-24 md:space-y-48 py-24 md:py-48 px-4"
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
    </div>
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
        <div class="flex-1 text-center font-bold text-green-1">
          <h4 class="text-h4">{{ $t('chapter3.action3') }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>
