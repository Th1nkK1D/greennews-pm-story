<template>
  <section class="flex flex-col text-center">
    <PollutionBackground>
      <div class="h-screen flex">
        <div class="max-w-2xl m-auto flex flex-col space-y-8">
          <p class="text-h5">
            {{ $t('intro.prologue1') }}
            <br />
            {{ $t('intro.prologue2') }}
          </p>
          <p class="text-h5">{{ $t('intro.prologue3') }}</p>
          <p class="text-h5">{{ $t('intro.prologue4') }}</p>
        </div>
      </div>
      <div class="h-screen flex">
        <div class="max-w-lg m-auto flex flex-col space-y-24">
          <h1 class="text-h1 font-bold">{{ $t('intro.title') }}</h1>
          <div class="flex flex-row space-x-12">
            <button
              class="p-1 bg-green-1 rounded-xl w-full text-white font-bold"
            >
              {{ $t('intro.button1') }}
            </button>
            <button
              class="p-1 text-green-1 bg-green-3 rounded-xl w-full font-bold"
            >
              {{ $t('intro.button2') }}
            </button>
          </div>
        </div>
      </div>
    </PollutionBackground>
  </section>
</template>
