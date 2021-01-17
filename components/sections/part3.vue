<template>
  <section>
    <div class="flex flex-col bg-white space-y-48 py-48">
      <PartLabel class="-my-24">หาทางออก</PartLabel>
      <h4 class="text-h4 max-w-lg mx-auto text-center">
        {{ $t('chapter3.solution.title') }}
      </h4>
      <div class="grid grid-cols-2 w-full max-w-xl mx-auto">
        <div class="col-span-2 p-8">กฎหมายนี้มุ่ง…</div>
        <div
          v-for="(item, index) in [
            'chapter3.solution.body1',
            'chapter3.solution.body1',
            'chapter3.solution.body1',
            'chapter3.solution.body1',
          ]"
          :key="item"
          class="space-y-2 p-8"
        >
          <img
            src="https://via.placeholder.com/150"
            alt=""
            class="rounded-full"
          />
          <p class="text-h3">{{ index + 1 }}.</p>
          <p>{{ $t(item) }}</p>
        </div>
        <div class="col-span-2 text-body2">
          {{ $t('chapter3.solution.source') }}
        </div>
      </div>
      <div class="text-center space-y-12 max-w-2xl mx-auto">
        <p class="text-h4">{{ $t('chapter3.solution.body2') }}</p>
        <p class="text-h3">{{ $t('chapter3.scenario.title') }}</p>
        <p class="text-h5">{{ $t('chapter3.scenario.body1') }}</p>
      </div>
      <div class="flex flex-col max-w-xl mx-auto space-y-8">
        <div
          v-for="item in [
            'chapter3.scenario.timeline1',
            'chapter3.scenario.timeline2',
            'chapter3.scenario.timeline3',
            'chapter3.scenario.timeline4',
          ]"
          :key="item"
          class="flex flex-row space-x-4"
        >
          <div class="rounded-full w-3 h-3 bg-green-1 m-auto" />
          <div class="flex-1">{{ $t(item) }}</div>
        </div>
        <p>{{ $t('chapter3.scenario.note') }}</p>
      </div>
      <div class="max-w-2xl mx-auto space-y-20">
        <h3 class="text-h3">{{ $t('chapter3.opinion.title') }}</h3>
        <div class="flex flex-row max-w-2xl mx-auto space-x-20">
          <img src="https://via.placeholder.com/250" alt="" />
          <div class="flex-1">{{ $t('chapter3.opinion1') }}</div>
        </div>
        <div class="flex flex-row max-w-2xl mx-auto space-x-20">
          <div class="flex-1">{{ $t('chapter3.opinion2') }}</div>
          <img src="https://via.placeholder.com/250" alt="" />
        </div>
      </div>
      <p class="text-h5 max-w-lg mx-auto text-center">
        {{ $t('chapter3.link') }}
      </p>
      <p class="text-h6 max-w-lg mx-auto text-center">
        {{ $t('chapter3.opinion3') }}
      </p>
      <p class="text-h4 max-w-lg mx-auto text-center">
        {{ $t('chapter3.link') }}
      </p>
    </div>

    <div class="flex flex-col bg-green-4 space-y-48 py-48">
      <div class="text-center text-green-1">
        <h1 class="text-h1">{{ $t('chapter3.title') }}</h1>
        <h5 class="text-h5">{{ $t('chapter3.action1.title') }}</h5>
      </div>
      <div class="space-y-8 max-w-2xl mx-auto">
        <h3 class="text-h3">{{ $t('chapter3.action1.subtitle') }}</h3>
        <div class="grid grid-cols-3">
          <div
            v-for="item in [
              'chapter3.action1.character1',
              'chapter3.action1.character2',
              'chapter3.action1.character3',
              'chapter3.action1.character4',
              'chapter3.action1.character5',
              'chapter3.action1.character6',
            ]"
            :key="item"
            class="m-1 bg-white rounded-xl p-8 text-center"
          >
            {{ $t(item) }}
          </div>
        </div>
      </div>
      <div class="w-full max-w-2xl mx-auto">
        <h4 class="text-h4 font-bold">{{ $t('chapter3.action1.database') }}</h4>
      </div>
    </div>

    <div class="bg-green-3 py-24">
      <div class="max-w-2xl mx-auto grid grid-cols-2">
        <div class="text-center space-y-6">
          <h4 class="text-h4 font-bold text-green-1">อ่านเพิ่มเติม</h4>
          <p class="text-h6">{{ $t('chapter3.action2') }}</p>
          <button class="bg-green-1 rounded p-2 text-white">
            ร่วมลงชื่อเสนอร่าง-พรบ
          </button>
        </div>
        <div class="text-center font-bold text-green-1">
          <h4 class="text-h4">{{ $t('chapter3.action3') }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>
