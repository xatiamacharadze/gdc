<template>
  <gdc-header />
  <router-view />
  <gdc-footer v-if="$route.meta.footer" />
</template>
<script setup>
import GdcHeader from "@/components/layout/GdcHeader.vue";
import GdcFooter from "@/components/layout/GdcFooter.vue";
</script>
