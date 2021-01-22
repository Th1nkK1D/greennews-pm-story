<template>
  <section class="flex flex-col text-center">
    <PollutionBackground>
      <div class="h-screen flex px-4">
        <div class="max-w-3xl m-auto flex flex-col space-y-8">
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
        <div
          class="max-w-xl m-auto flex flex-col space-y-16 md:space-y-24 px-4"
        >
          <h1 class="text-h2 md:text-h1 font-bold">{{ $t('intro.title') }}</h1>
          <div
            class="flex flex-col mx-4 md:flex-row space-y-4 md:space-y-0 md:space-x-12"
          >
            <button
              class="h-12 md:h-16 w-full bg-green-1 rounded-xl text-white font-bold"
            >
              {{ $t('intro.button1') }}
            </button>
            <button
              class="h-12 md:h-16 w-full text-green-1 bg-green-3 rounded-xl font-bold"
            >
              {{ $t('intro.button2') }}
            </button>
          </div>
        </div>
      </div>
    </PollutionBackground>
  </section>
</template>
