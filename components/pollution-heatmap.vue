<template>
  <div class="flex flex-row space-x-2 md:space-x-4">
    <div class="flex flex-col space-y-1 md:space-y-2">
      <div v-for="month in months" :key="month" class="h-8 flex justify-end">
        <p class="my-auto">{{ month }}</p>
      </div>
    </div>
    <div class="flex flex-col space-y-6">
      <div class="flex flex-col flex-1 space-y-1 md:space-y-2">
        <div
          v-for="(month, monthIndex) in data"
          :key="monthIndex"
          class="h-8 flex flex-row space-x-1 md:space-x-2"
        >
          <div
            v-for="({ value, bgColor }, dayIndex) in month"
            :key="dayIndex"
            class="flex-1"
          >
            <div class="relative">
              <div
                v-if="
                  hovered.dayIndex === dayIndex &&
                  hovered.monthIndex === monthIndex
                "
                class="absolute bottom-1 bg-black text-white rounded rounded-bl-none px-2 py-1 text-body2"
              >
                {{ value }}
              </div>
            </div>
            <div
              v-if="value"
              class="dayfill w-full h-full rounded transform transition-transform hover:scale-110 duration-100 ease-in-out"
              :class="bgColor"
              @mouseenter="hovered = { dayIndex, monthIndex }"
              @mouseleave="hovered = { dayIndex: null, monthIndex: null }"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row border-t border-black-3">
        <div
          v-for="{ t, color } in [
            { t: 'red', color: 'bg-red' },
            { t: 'orange', color: 'bg-orange' },
            { t: 'normal', color: 'bg-green-3' },
          ]"
          :key="t"
          class="flex-1 flex flex-row text-body2 pt-4"
        >
          <div>
            <div class="w-4 h-4 rounded my-1 mx-2" :class="color" />
          </div>
          <Parse :t="`chapter1.datavisual.legend.${t}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import enterView from 'enter-view'
import log from '../assets/data/bkk-pm-log.json'

const MAX_DAY_IN_MONTH = 31

export default {
  data() {
    return {
      hovered: {
        dayIndex: null,
        monthIndex: null,
      },
    }
  },
  computed: {
    months() {
      return this.$i18n.locale === 'th'
        ? ['พฤศจิกายน', 'ธันวาคม', 'มกราคม', 'กุมภาพันธ์']
        : ['November', 'December', 'January', 'Febuary']
    },
    data() {
      return log.map((month) =>
        month
          .map((value) => ({
            value,
            bgColor:
              value >= 90 ? 'bg-red' : value >= 50 ? 'bg-orange' : 'bg-green-3',
          }))
          .concat(
            new Array(MAX_DAY_IN_MONTH - month.length).fill({
              bgColor: 'bg-none',
            })
          )
      )
    },
  },
  mounted() {
    const animation = anime({
      targets: this.$el.querySelectorAll('.dayfill'),
      opacity: [0, 1],
      delay: (_, i) => i * 10,
      autoplay: false,
    })

    enterView({
      selector: [this.$el],
      enter: () => animation.play(),
      once: true,
      offset: 0.3,
    })
  },
}
</script>
