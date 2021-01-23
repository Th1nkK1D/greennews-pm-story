<template>
  <select
    ref="select"
    :value="value"
    class="appearance-none focus:outline-none border-black border-b pr-6 cursor-pointer w-full overflow-ellipsis font-bold text-green-1"
    @change="(e) => $emit('input', e.target.value)"
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>

<style scoped>
select {
  background: none;
  background-image: url('data:image/svg+xml;utf8,<svg width="12" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.79068 1.29081L8.33335 8.83348L15.876 1.29081L14.9333 0.348145L8.33335 6.94815L1.73335 0.348145L0.79068 1.29081Z" fill="black"/></svg>');
  background-repeat: no-repeat;
  background-position-x: calc(100% - 6px);
  background-position-y: 50%;
}
</style>
