<template>
  <Div class="chip_container">
    <client-only v-if="icon">
      <VIcon class="mr-1" :name="icon" :fill="fill" />
    </client-only>
    {{ sliceMaxLength }} <P v-if="isPoint" class="text-yellow-400">P</P>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: null
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    value: {
      type: Number,
      required: true
    },
    maxLength: {
      type: Number,
      default: 0
    },
    isPoint: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sliceMaxLength() {
      const stringify = String(this.value)
      const converted = (stringify.length >= this.maxLength && this.maxLength > 0 ?
        stringify.slice(0, this.maxLength) : stringify).padStart(2, '0')

      return stringify.length >= this.maxLength && this.maxLength > 0 ?
        converted + '+' : converted
    }
  }
})
</script>

<style lang="scss" scoped>
.chip_container {
  @apply flex
    px-3 py-2
    rounded-full
    bg-slate-200/10
    whitespace-nowrap
    items-center;
}
</style>
