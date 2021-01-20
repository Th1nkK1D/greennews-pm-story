<template>
  <section>
    <div class="flex flex-col bg-black-4 py-48 px-4 space-y-48">
      <PartLabel class="-my-24">รู้จักปัญหา: หน้าตา</PartLabel>
      <div class="space-y-24">
        <img
          src="https://via.placeholder.com/800x400?text=motocycler_illustration"
          alt=""
          class="w-full max-w-3xl m-auto"
        />
        <div class="max-w-xl m-auto space-y-8">
          <p
            v-for="p in [
              'chapter1.story1',
              'chapter1.story2',
              'chapter1.story3',
            ]"
            :key="p"
            class="text-indent"
          >
            {{ $t(p) }}
          </p>
        </div>
      </div>
      <div class="space-y-24">
        <img
          src="https://via.placeholder.com/800x400?text=pm2.5_illustration"
          alt=""
          class="w-full max-w-3xl m-auto"
        />
        <div class="max-w-xl m-auto space-y-8">
          <p
            v-for="p in ['chapter1.factbox', 'chapter1.story4']"
            :key="p"
            class="text-indent"
          >
            {{ $t(p) }}
          </p>
        </div>
      </div>
      <div class="space-y-4 max-w-3xl m-auto">
        <img
          src="https://via.placeholder.com/800x400?text=pm2.5_heatmap"
          alt=""
          class="w-full"
        />
        <p class="text-right text-body2">
          {{ $t('chapter1.datavisual.source') }}
        </p>
      </div>
    </div>

    <div class="flex flex-col bg-black-3 py-48 space-y-40">
      <p class="text-h6 max-w-xl m-auto text-center">
        {{ $t('chapter1.fact1') }}
      </p>
      <p class="text-h4 text-center">
        {{ $t('chapter1.link') }}
      </p>
      <div class="flex flex-col space-y-20 text-center">
        <p class="text-h5">
          {{ $t('chapter1.whatispm.title') }}
        </p>
        <div class="flex flex-row justify-between max-w-3xl mx-auto">
          <div
            v-for="item in [
              'chapter1.whatispm.body1',
              'chapter1.whatispm.body1',
            ]"
            :key="item"
          >
            <img
              src="https://via.placeholder.com/200"
              alt=""
              class="rounded-full mx-auto mb-4"
            />
            {{ $t(item) }}
          </div>
        </div>
        <p class="max-w-xl mx-auto">
          {{ $t('chapter1.whatispm.body2') }}
        </p>
      </div>
      <div class="max-w-3xl mx-auto space-y-12">
        <h3 class="text-h3 text-center">
          {{ $t('chapter1.whatwedo.title') }}
        </h3>
        <div class="flex flex-row space-x-12">
          <div
            v-for="item in [
              'chapter1.whatwedo.body1',
              'chapter1.whatwedo.body1',
            ]"
            :key="item"
            class="flex-1"
          >
            <img
              src="https://via.placeholder.com/300x200"
              alt=""
              class="w-full mb-8"
            />
            {{ $t('chapter1.whatwedo.body1') }}
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-20 max-w-3xl m-auto">
        <div class="flex flex-row space-x-8">
          <div class="flex-1">
            <img
              src="https://via.placeholder.com/300x200"
              alt=""
              class="w-full"
            />
          </div>
          <div class="flex flex-1">
            <p class="m-auto text-center">
              {{ $t('chapter1.whatwedo.body2') }}
            </p>
          </div>
        </div>
        <div class="flex flex-row space-x-8">
          <div class="flex-1" />
          <div class="flex flex-1">
            <p class="m-auto text-center">
              {{ $t('chapter1.whatwedo.body3') }}
            </p>
          </div>
        </div>
        <div class="flex flex-row space-x-8">
          <div class="flex-1">
            <img
              src="https://via.placeholder.com/300x200"
              alt=""
              class="w-full"
            />
          </div>
          <div class="flex flex-1">
            <p class="m-auto text-center">
              {{ $t('chapter1.whatwedo.body4') }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex py-48">
        <p class="m-auto text-h3">
          {{ $t('chapter1.whatwedo.link') }}
        </p>
      </div>
    </div>
  </section>
</template>
