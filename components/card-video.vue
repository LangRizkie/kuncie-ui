<template>
  <Div class="card_container" :class="[{ card_locked: data.isLocked }]"
    :style="{ background: data.background }">
    <P class="font-black line-clamp-3">{{ data.title }}</P>
    <Div class="card_chip">{{ videoLength }}</Div>
    <Div class="flex w-full items-center justify-between">
      <Avatar :src="data.avatar" />
      <client-only v-if="data.isLocked">
        <VIcon name="ri-lock-2-fill" scale="2" />
      </client-only>
      <VideoProgressButton v-else :percent="data.video.percent" />
    </Div>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
import VideoProgressButton from './video-progress.vue'

export default Vue.extend({
  components: { VideoProgressButton },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    videoLength() {
      return `Video • ${this.$moment.utc(this.data.video.duration * 1000).format('mm:ss')} min`
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  &_container {
    @apply flex
      w-64
      h-48
      p-4
      rounded-lg
      flex-col
      items-start;
  }

  &_chip {
    @apply flex
    p-1.5
    my-2
    text-xs
    font-semibold
    rounded-md
    bg-black/20
    items-center;
  }

  &_locked {
    @apply grayscale bg-gray-300 text-gray-800;
  }
}
</style>
