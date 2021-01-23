<template>
  <section class="flex flex-col text-center">
    <PollutionBackground>
      <div class="h-screen flex px-4">
        <div
          ref="introTextContainer"
          class="max-w-3xl m-auto flex flex-col space-y-8"
        >
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
          class="max-w-2xl m-auto flex flex-col space-y-16 md:space-y-24 px-4"
        >
          <h1 class="text-h2 md:text-h1 font-bold">{{ $t('intro.title') }}</h1>
          <div
            class="flex flex-col mx-4 md:flex-row space-y-4 md:space-y-0 md:space-x-12"
          >
            <a
              href="#start"
              class="flex h-12 md:h-16 w-full bg-green-1 hover:bg-green-2 rounded-3xl text-white font-bold"
            >
              <p class="m-auto">
                {{ $t('intro.button1') }}
              </p>
            </a>
            <a
              href="#action"
              class="flex h-12 md:h-16 w-full text-green-1 bg-green-3 hover:bg-green-4 rounded-3xl font-bold"
            >
              <p class="m-auto">
                {{ $t('intro.button2') }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </PollutionBackground>
  </section>
</template>

<script>
import anime from 'animejs'

export default {
  mounted() {
    anime({
      targets: this.$refs.introTextContainer.children,
      opacity: [0, 1],
      duration: 3000,
      delay: (_, index) => 100 + index * 1000,
    })
  },
}
</script>
