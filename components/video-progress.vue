<template>
  <Button class="video_container">
    <client-only>
      <vue-ellipse-progress
        color="#FFFFFF"
        color-fill="transparent"
        empty-color="#6B5F6F"
        :size="40"
        :legend="false"
        :progress="percent">
      </vue-ellipse-progress>
      <VIcon class="absolute" name="ri-play-fill" />
    </client-only>
  </Button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    percent: {
      type: Number,
      default: 0
    }
  }
})
</script>

<style lang="scss" scoped>
.video_container {
 @apply flex
  relative
  border-2
  border-purple-dark
  rounded-full
  bg-purple-dark
  items-center
  justify-center;
}
</style>
