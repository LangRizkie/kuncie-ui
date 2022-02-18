<template>
  <Div class="search_input" :class="[{ 'pl-12': prefixIcon, 'pr-12': suffixIcon }, 'px-6']">
    <Div v-if="prefixIcon" :data-icon="prefixIcon" class="absolute left-4">
      <ButtonIcon :icon="prefixIcon" />
    </Div>
    <slot />
    <Div v-if="suffixIcon" :data-icon="prefixIcon" class="absolute right-4">
      <ButtonIcon :icon="suffixIcon" />
    </Div>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonIcon from './button-icon.vue'

export default Vue.extend({
  components: { ButtonIcon },
  props: {
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    }
  }
})
</script>

<style lang="scss" scoped>
.search_input {
  @apply flex
    relative
    w-full
    py-4
    rounded-full
    bg-slate-200/10
    items-center;

  input {
    @apply w-full bg-transparent placeholder:text-slate-200;
  }
}
</style>

