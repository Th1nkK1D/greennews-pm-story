<template>
  <div class="flex flex-row" :class="densed ? 'space-x-2' : 'space-x-4'">
    <a
      v-for="{ service, icon, href } in socialLinks"
      :key="service"
      :href="href"
      class="flex w-10 h-10 rounded hover:bg-green-4"
      :class="outlined ? 'border border-green-1' : 'bg-white'"
    >
      <img :src="icon" :alt="service" class="m-auto" />
    </a>
  </div>
</template>

<script>
const encodedUrl = encodeURI('https://th1nkk1d.github.io/greennews-pm-story/')

export default {
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    densed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      socialLinks: [
        {
          service: 'Facebook',
          icon: require('../assets/images/social-facebook.svg'),
          href: `http://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        },
        {
          service: 'Twitter',
          icon: require('../assets/images/social-twitter.svg'),
          href: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
        },
        {
          service: 'Line',
          icon: require('../assets/images/social-line.svg'),
          href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
        },
      ],
    }
  },
}
</script>
