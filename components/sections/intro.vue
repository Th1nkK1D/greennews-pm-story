<template>
  <section class="flex flex-col text-center">
    <PollutionBackground>
      <div class="h-screen flex">
        <div class="max-w-lg m-auto flex flex-col space-y-24">
          <h1 class="text-72 font-bold">{{ $t('intro.title') }}</h1>
          <div class="flex flex-row space-x-12 text-white">
            <button class="p-2 bg-green-1 rounded w-full">
              {{ $t('intro.button1') }}
            </button>
            <button class="p-2 bg-green-1 rounded w-full">
              {{ $t('intro.button2') }}
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-xl mx-auto flex flex-col space-y-48 pb-48">
        <p class="text-64 font-bold">
          {{ $t('intro.prologue1') }}
        </p>
        <div>
          <p class="text-24">{{ $t('intro.prologue2') }}</p>
          <p class="text-48">
            {{ $t('intro.prologue3') }}
          </p>
        </div>
      </div>
    </PollutionBackground>
  </section>
</template>
