<template>
  <div class="flex flex-row space-x-2 md:space-x-4">
    <div class="flex flex-col space-y-4 my-1">
      <div v-for="month in months" :key="month" class="text-right">
        {{ month }}
      </div>
    </div>
    <div class="flex flex-col flex-1 space-y-1 md:space-y-2">
      <div
        v-for="(month, monthIndex) in data"
        :key="monthIndex"
        class="flex-1 flex flex-row space-x-1 md:space-x-2"
      >
        <div
          v-for="(bgColor, dayIndex) in month"
          :key="dayIndex"
          class="flex-1 rounded"
          :class="bgColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import log from '../assets/data/bkk-pm-log.json'

const MAX_DAY_IN_MONTH = 31

export default {
  computed: {
    months() {
      return this.$i18n.locale === 'th'
        ? ['พฤศจิกายน', 'ธันวาคม', 'มกราคม', 'กุมภาพันธ์']
        : ['November', 'December', 'January', 'Febuary']
    },
    data() {
      return log.map((month) =>
        month
          .map((value) =>
            value >= 90 ? 'bg-red' : value >= 50 ? 'bg-orange' : 'bg-green-3'
          )
          .concat(new Array(MAX_DAY_IN_MONTH - month.length).fill('bg-none'))
      )
    },
  },
}
</script>
