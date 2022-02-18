<template>
  <Div class="flex w-full flex-col">
    <Section class="px-6 pt-6" title="Lagi Trending 📈" />
    <Div class="my-4">
      <client-only v-if="cards">
        <swiper ref="cardSwiper" :options="cardSwiperOptions">
          <swiper-slide v-for="(each, index) in cards" :key="index">
            <CardTrend class="ml-6"
              :class="{ 'mr-6' : index === cards.length - 1 }" :data="each" />
          </swiper-slide>
        </swiper>
      </client-only>
    </Div>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
import CardTrend from '../card-trend.vue'
import Section from '~/components/section.vue'

export default Vue.extend({
  components: { Section, CardTrend },
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
      this.$axios.get('/trend-cards.json')
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

