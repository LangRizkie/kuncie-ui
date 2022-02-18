<template>
  <Div class="avatar_container">
    <Img :src="src" alt="Avatar" />
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.avatar_container {
 @apply flex
  w-11
  h-11
  rounded-full
  border-2
  border-orange-300
  bg-slate-400
  overflow-hidden;
}
</style>

