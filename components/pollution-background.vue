<template>
  <div class="relative">
    <slot />
    <div
      ref="pollutionContainer"
      class="fixed top-0 left-0 right-0 h-screen overflow-hidden -z-1"
    />
  </div>
</template>

<script>
import anime from 'animejs'

const PARTICLE_AMOUNT = 15

export default {
  mounted() {
    for (let i = 0; i < PARTICLE_AMOUNT; i++) {
      const particle = document.createElement('div')
      particle.classList.add('particle')
      particle.style.top = `${Math.random() * 100}%`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.scale = Math.random() + 0.5

      this.$refs.pollutionContainer.appendChild(particle)

      anime({
        targets: particle,
        translateY: 10 + Math.random() * 10,
        duration: 1000 + Math.random() * 1000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        delay: Math.random() * 1000,
      })
    }
  },
}
</script>

<style>
.particle {
  position: absolute;
  width: 23px;
  height: 23px;
  background: #c4c4c4;
  filter: blur(10px);
  z-index: -1;
}
</style>
