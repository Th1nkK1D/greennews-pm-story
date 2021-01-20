<template>
  <VueShowdown :markdown="$t(t)" :options="options" />
</template>

<script>
import { VueShowdown } from 'vue-showdown'

export default {
  components: {
    VueShowdown,
  },
  props: {
    t: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      options: {
        simpleLineBreaks: true,
      },
    }
  },
}
</script>
