<template>
  <section>
    <div class="flex flex-col bg-white space-y-48 py-48 px-4">
      <PartLabel class="-my-24">{{ $t('chapter3.name') }}</PartLabel>
      <h4 class="text-h4 max-w-xl mx-auto text-center">
        {{ $t('chapter3.solution.title') }}
      </h4>
      <div class="grid grid-cols-2 w-full max-w-2xl mx-auto">
        <div class="col-span-2 p-8">กฎหมายนี้มุ่ง…</div>
        <div
          v-for="(purpose, index) in [
            'purpose1',
            'purpose2',
            'purpose3',
            'purpose4',
          ]"
          :key="purpose"
          class="space-y-2 p-8"
        >
          <img
            src="https://via.placeholder.com/150"
            alt=""
            class="rounded-full"
          />
          <p class="text-h3">{{ index + 1 }}.</p>
          <p>{{ $t(`chapter3.solution.${purpose}`) }}</p>
        </div>
        <div class="col-span-2 text-body2">
          {{ $t('chapter3.solution.source') }}
        </div>
      </div>
      <div class="text-center space-y-12 max-w-3xl mx-auto">
        <p class="text-h4">{{ $t('chapter3.solution.body2') }}</p>
        <p class="text-h3">{{ $t('chapter3.scenario.title') }}</p>
        <p class="text-h5">{{ $t('chapter3.scenario.body1') }}</p>
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
          <div class="flex-1">{{ $t(`chapter3.scenario.${timeline}`) }}</div>
        </div>
        <p>{{ $t('chapter3.scenario.note') }}</p>
      </div>
      <div class="max-w-3xl mx-auto space-y-20">
        <h3 class="text-h3">{{ $t('chapter3.opinion.title') }}</h3>
        <div class="flex flex-row max-w-3xl mx-auto space-x-20">
          <div>
            <img src="https://via.placeholder.com/250" alt="" />
            <p class="text-right">{{ $t('chapter3.opinion1.source') }}</p>
          </div>
          <QuoteBlock class="flex-1">
            {{ $t('chapter3.opinion1.content') }}
          </QuoteBlock>
        </div>
        <div class="flex flex-row max-w-3xl mx-auto space-x-20">
          <QuoteBlock class="flex-1">
            {{ $t('chapter3.opinion2.content') }}
          </QuoteBlock>
          <div>
            <img src="https://via.placeholder.com/250" alt="" />
            <p class="text-right">{{ $t('chapter3.opinion2.source') }}</p>
          </div>
        </div>
      </div>
      <p class="text-h5 max-w-xl mx-auto text-center">
        {{ $t('chapter3.link') }}
      </p>
      <QuoteBlock horizontal class="max-w-3xl mx-auto">
        <p class="text-h6 text-center">
          {{ $t('chapter3.opinion3') }}
        </p>
      </QuoteBlock>
      <p class="text-h4 max-w-xl mx-auto text-center">
        {{ $t('chapter3.link') }}
      </p>
    </div>

    <div class="flex flex-col bg-green-4 space-y-48 py-48 px-4">
      <div class="text-center text-green-1">
        <h1 class="text-h1">{{ $t('chapter3.title') }}</h1>
        <h5 class="text-h5">{{ $t('chapter3.action1.title') }}</h5>
      </div>
      <div class="space-y-8 max-w-3xl mx-auto">
        <div>
          <h6 class="text-h6">{{ $t('chapter3.action1.presubtitle') }}</h6>
          <h3 class="text-h3">{{ $t('chapter3.action1.subtitle') }}</h3>
        </div>
        <div class="grid grid-cols-3">
          <a
            v-for="character in [1, 2, 3, 4, 5, 6]"
            :key="character"
            href="#policy"
            class="m-1 rounded-xl p-8 text-center bg-white hover:bg-green-2 hover:text-white"
            @click="$refs.policyTable.updateCharacter(character)"
          >
            {{ $t(`chapter3.action1.character${character}`) }}
          </a>
        </div>
      </div>
      <div id="policy" class="pt-12">
        <PolicyTable ref="policyTable" class="w-full max-w-3xl mx-auto" />
      </div>
    </div>

    <div class="bg-green-3 py-24 px-4">
      <div class="max-w-3xl mx-auto grid grid-cols-2">
        <div class="text-center space-y-6">
          <h4 class="text-h4 font-bold text-green-1">
            {{ $t('chapter3.action2.title') }}
          </h4>
          <p class="text-h6">{{ $t('chapter3.action2.content') }}</p>
          <a
            class="inline-block bg-green-1 rounded p-2 text-white"
            href="https://thaicleanair.org/ร่วมลงชื่อเสนอร่าง-พรบ"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('chapter3.action2.button') }}
          </a>
        </div>
        <div class="text-center font-bold text-green-1">
          <h4 class="text-h4">{{ $t('chapter3.action3') }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>
