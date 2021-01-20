<template>
  <div>
    <h4 class="text-h4 font-bold">
      {{ $t('chapter3.action1.database.title') }}
    </h4>
    <div class="flex flex-row mt-2">
      <div class="flex flex-row space-x-4 w-1/3">
        <h4 class="text-h4">{{ $t('chapter3.action1.database.year') }}</h4>
        <Dropdown
          v-model.number="selectedYear"
          :options="yearOptions"
          class="my-auto"
        />
      </div>
      <div class="flex flex-row space-x-4 w-full">
        <h4 class="text-h4">{{ $t('chapter3.action1.database.category') }}</h4>
        <Dropdown
          v-model.number="selectedCategory"
          :options="categoryOptions"
          class="my-auto"
        />
      </div>
    </div>
    <div class="flex flex-col rounded-xl bg-white mt-8 py-4 px-6 space-y-4">
      <div class="flex flex-row">
        <h6 class="flex-1 text-h6 font-bold">
          {{ $t('chapter3.action1.database.policy') }}
        </h6>
        <h6 class="w-1/3 text-h6 font-bold">
          {{ $t('chapter3.action1.database.department') }}
        </h6>
      </div>
      <div
        v-for="{ policy, department } in filteredPolicies"
        :key="policy"
        class="flex flex-row space-x-2 pb-2 border-b border-black-4"
      >
        <div class="flex-1">{{ policy }}</div>
        <div class="w-1/3">{{ department }}</div>
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
