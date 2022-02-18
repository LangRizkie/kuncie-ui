<template>
  <client-only>
    <Button>
      <VIcon :name="icon" :fill="fill" :scale="scale" />
    </Button>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String,
      required: true
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    scale: {
      type: Number,
      default: 1
    }
  }
})
</script>
