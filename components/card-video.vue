<template>
  <Div class="card_container" :class="['ml-6', 'bg-green-600']">
    <P class="line-clamp-3">{{ title }}</P>
    <Div class="card_chip">{{ videoLength }}</Div>
    <Div class="flex w-full justify-between">
      <Avatar :src="avatar" />
      <VideoProgressButton :percent="percent" />
    </Div>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
import VideoProgressButton from './video-progress.vue'

export default Vue.extend({
  components: { VideoProgressButton },
  props: {
    title: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    percent: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      required: true
    }
  },
  computed: {
    videoLength() {
      return `Video • ${this.$moment.utc(this.duration * 1000).format('mm:ss')} min`
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
      font-semibold
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
    text-white
    bg-black/20
    items-center;
  }
}
</style>
