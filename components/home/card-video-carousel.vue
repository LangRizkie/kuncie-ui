<template>
  <Div class="flex w-full my-10 flex-col">
    <Div class="flex w-full px-6 items-center justify-between">
      <H4 class="text-xl font-bold tracking-wider">Rencana belajar</H4>
      <Button class="capitalize font-sans font-semibold tracking-wide">Lihat Rencana</Button>
    </Div>
    <Div class="my-4">
      <CardVideo v-for="(each, index) in cards" :key="index"
      :title="each.title" :avatar="each.avatar"
      :percent="each.video.percent"
      :duration="each.video.duration" />
    </Div>
  </Div>
</template>
<script lang="ts">
import Vue from 'vue'

import cardVideo from '../card-video.vue'

export default Vue.extend({
  components: { cardVideo },
  data: () => ({
    cards: [
      {
        title: 'Menulis Kreatif dan Terstruktur agar Produk Laris di Pasaran',
        avatar: 'https://i.pravatar.cc/300',
        video: {
          percent: 20,
          duration: 1800
        }
      }
    ]
  })
})
</script>
