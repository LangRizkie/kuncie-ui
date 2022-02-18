<template>
  <Div class="flex w-full justify-between">
    <H4 class="text-xl font-black tracking-wider">
      {{ title }}
    </H4>
    <Button v-if="button" class="capitalize font-sans font-semibold tracking-wide"
      @click="$emit('click', true)">
      {{ button }}
    </Button>
  </Div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    button: {
      type: String,
      default: null
    }
  }
})
</script>
