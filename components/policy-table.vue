<template>
  <div>
    <p class="text-h5 md:text-h4 font-bold">
      {{ $t('chapter3.action1.database.title') }}
    </p>
    <div
      class="flex flex-col md:flex-row mt-2 space-y-4 md:space-y-0 md:space-x-12"
    >
      <div class="flex flex-col md:flex-row md:space-x-4 w-1/3">
        <label for="year" class="text-h5 md:text-h4">
          {{ $t('chapter3.action1.database.year') }}
        </label>
        <Dropdown
          id="year"
          v-model.number="selectedYear"
          :options="yearOptions"
          class="my-auto"
        />
      </div>
      <div class="flex flex-col md:flex-row md:space-x-4 w-full">
        <label for="category" class="text-h5 md:text-h4">
          {{ $t('chapter3.action1.database.category') }}
        </label>
        <Dropdown
          id="category"
          v-model.number="selectedCategory"
          :options="categoryOptions"
          class="my-auto"
        />
      </div>
    </div>
    <div class="rounded-xl bg-white -m-2 md:m-0 mt-8 py-2 md:py-4 px-3 md:px-6">
      <div
        v-if="filteredPolicies.length === 0"
        class="text-black-2 py-8 text-center"
      >
        {{ $t('chapter3.action1.database.empty') }}
      </div>
      <div v-else class="flex flex-col space-y-4">
        <div class="flex flex-row md:text-h6 font-bold">
          <p class="flex-1">
            {{ $t('chapter3.action1.database.policy') }}
          </p>
          <p class="w-1/3">
            {{ $t('chapter3.action1.database.department') }}
          </p>
        </div>
        <div
          v-for="{ policy, department } in filteredPolicies"
          :key="policy"
          class="flex flex-row space-x-2 md:space-x-6 pb-2 border-b border-black-4"
        >
          <div class="flex-1">{{ policy }}</div>
          <div class="w-1/3 overflow-ellipsis">{{ department }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch() {
    this.policies = require(`../assets/data/policy-${this.$i18n.locale}`)

    this.yearOptions = [
      ...new Set(this.policies.map(({ year }) => year)),
    ].sort()
    this.categoryOptions = [
      ...new Set(this.policies.map(({ category }) => category)),
    ]
    this.selectedYear = this.yearOptions[0]
    this.selectedCategory = this.categoryOptions[0]
  },
  data() {
    return {
      policies: [],
      yearOptions: [],
      categoryOptions: [],
      selectedYear: null,
      selectedCategory: null,
    }
  },
  computed: {
    filteredPolicies() {
      return this.policies.filter(
        ({ year, category }) =>
          year === this.selectedYear && category === this.selectedCategory
      )
    },
  },
  methods: {
    updateCharacter(character) {
      this.selectedCategory = this.categoryOptions[character - 1]
    },
  },
}
</script>
