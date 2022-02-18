<template>
  <Div class="card_container">
    <Div class="flex relative w-full h-full overflow-hidden rounded-lg">
      <Div class="flex absolute w-full h-full">
        <Div class="card_bubble w-72 h-72 -left-[2rem] -top-[6.5rem]"
          :style="{ background: data.background }"></Div>
        <Div class="card_bubble w-24 h-24 -left-[3.5rem] -bottom-[-2.5rem] brightness-90"
          :style="{ background: data.background }"></Div>
        <Div class="card_bubble w-16 h-16 -right-[1rem] -bottom-[-5.5rem] brightness-110"
          :style="{ background: data.background }"></Div>
      </Div>
      <Div class="card_wrapper">
        <P class="font-black my-2 line-clamp-3" :class="['text-black', { 'text-white': data.invertTextColor }]">
          {{ data.title }}
        </P>
        <Div class="flex flex-col">
          <Avatar :src="data.avatar" />
          <Div class="flex w-full mt-1 items-center justify-between">
            <P class="text-sm line-clamp-1 capitalize">
              {{ data.artist }}
            </P>
            <client-only>
              <VIcon name="ri-add-circle-line" scale="1.4"></VIcon>
            </client-only>
          </Div>
        </Div>
      </Div>
    </Div>
    <Div v-if="data.isNew" class="card_ribbon">baru</Div>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    data: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  &_container {
    @apply flex
      w-52
      h-64
      my-1
      rounded-lg
      bg-white
      drop-shadow-xl
      flex-col
      items-start;
  }

  &_wrapper {
    @apply flex
      absolute
      w-full
      h-full
      p-4
      flex-col
      justify-between;
  }

  &_bubble {
    @apply absolute
      rounded-full;
  }

  &_ribbon {
    @apply flex
      absolute
      px-4
      py-0.5
      -top-[0.1rem]
      -left-[0.1rem]
      uppercase
      rounded-tl-md
      rounded-br-md
      font-bold
      text-xs
      text-white
      bg-purple-700
      items-center;
  }
}
</style>
