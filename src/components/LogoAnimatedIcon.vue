<script setup lang="ts">
const { icon } = defineProps({
  icon: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <img :src="icon.name" alt="d icon" :class="icon.animation">
  <img v-for="i in 12"
       :key="icon.name + i"
       :class="`gdelay-${i + 1} ${icon.animation}`"
       :src="icon.name"
       :alt="`${icon.name} icon`"
       class="opacity-5"
  >
</template>

<style scoped lang="scss">

</style>