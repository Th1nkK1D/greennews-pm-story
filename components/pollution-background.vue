<template>
  <div class="relative">
    <slot />
    <div ref="endOfContent" />
    <div
      ref="pollutionContainer"
      class="fixed top-0 left-0 right-0 h-screen overflow-hidden -z-1"
    >
      <div
        v-for="({ top, left, scale }, index) in particles"
        :key="index"
        class="absolute w-2 h-2 bg-black-2 -z-1"
        :style="{ top, left, scale, filter: 'blur(0.3rem)' }"
      />
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import enterView from 'enter-view'

const PARTICLE_AMOUNT = 20

export default {
  data() {
    return {
      particles: new Array(PARTICLE_AMOUNT).fill().map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        scale: Math.random() + 0.5,
      })),
    }
  },
  mounted() {
    const particlesAnimation = anime({
      targets: this.$refs.pollutionContainer.children,
      translateY: () => 10 + Math.random() * 10,
      duration: () => 1000 + Math.random() * 1000,
      delay: () => Math.random() * 1000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
    })

    enterView({
      selector: [this.$refs.endOfContent],
      enter: () => particlesAnimation.pause(),
      exit: () => particlesAnimation.play(),
      offset: 1,
    })
  },
}
</script>
