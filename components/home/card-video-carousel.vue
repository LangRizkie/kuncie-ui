<template>
  <Div class="flex w-full my-10 flex-col">
    <Section class="px-6" title="Rencana belajar" button="Lihat Rencana" />
    <Div class="my-4">
      <client-only v-if="cards">
        <swiper ref="cardSwiper" :options="cardSwiperOptions">
          <swiper-slide v-for="(each, index) in cards" :key="index">
            <CardVideo class="ml-6"
              :class="{ 'mr-6' : index === cards.length - 1 }" :data="each" />
          </swiper-slide>
        </swiper>
      </client-only>
    </Div>
  </Div>
</template>
<script lang="ts">
import Vue from 'vue'

import cardVideo from '../card-video.vue'
import Section from '../section.vue'

export default Vue.extend({
  components: { cardVideo, Section },
  data: () => ({
    cardSwiperOptions: {
      slidesPerView: 'auto'
    },
    cards: []
  }),
  mounted() {
    Promise.allSettled([
      this.getCardsList()
    ])
  },
  methods: {
    getCardsList() {
      this.$axios.get('/video-cards.json')
        .then((cards: any) => {
          this.cards = cards.data
        })
    }
  }
})
</script>

<style lang="scss" scoped>
.swiper-slide {
  @apply w-min #{!important};
}
</style>
