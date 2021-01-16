<template>
  <div class="bg-white h-1">
    <div
      class="h-full bg-green-2 transition-width duration-200 ease-out"
      :style="{ width: progressPercentage }"
    />
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
  computed: {
    progressPercentage() {
      return `${Math.round(this.progress * 100)}%`
    },
  },
}
</script>
