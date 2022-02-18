<template>
  <Div class="main_container">
    <Div class="flex px-6 pt-6 items-center justify-between">
      <Div class="flex">
        <Chip icon="ri-flashlight-fill" fill="#F2C511" :value="99999" :max-length="4" :is-point="true" />
        <Chip icon="ri-fire-fill" fill="#E84B3C" :value="999" :max-length="2" class="mx-2" />
        <Chip icon="ri-key-2-fill" fill="#1FBC9C" :value="999" :max-length="2" />
      </Div>
      <ButtonIcon icon="ri-settings-3-fill" :scale="1.4" />
    </Div>
    <Div class="flex px-6 flex-col">
      <H1 class="my-8">{{ welcome }}</H1>
      <SearchForm prefix-icon="ri-search-line">
        <Input :placeholder="placeholder" />
      </SearchForm>
    </Div>
    <VideoCardCarousel />
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonIcon from '~/components/button-icon.vue'
import SearchForm from '~/components/search-form.vue'
import VideoCardCarousel from '~/components/home/card-video-carousel.vue'

export default Vue.extend({
  components: { ButtonIcon, SearchForm, VideoCardCarousel },
  data: () => ({
    name: 'Gilang',
    placeholder: 'Cari Topik, Konten, atau Mentor'
  }),
  computed: {
    welcome() {
      return `hai ${this.name}!`
    }
  }
})
</script>

<style lang="scss" scoped>
.main_container {
  @apply flex
    text-white
    bg-purple-dark
    flex-col
    justify-between;

  h1 {
    @apply capitalize
      text-3xl
      font-bold
      tracking-wider;
  }
}
</style>
