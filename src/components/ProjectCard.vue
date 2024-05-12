<template>
  <router-link
    :to="'project/' + project.id"
    class="flex flex-col md:flex-row md:hover:bg-grey transition-all"
  >
    <div class="left md:w-1/2 flex flex-col justify-between text-black">
      <p
        class="w-full flex justify-between items-center px-[14px] md:px-[22px] pt-[12px]"
      >
        <span class="uppercase">{{ project.type }}</span>
        <span>©{{ project.date }}</span>
      </p>
      <h2
        class="uppercase text-[50px] sm:text-lg flex justify-between items-end pl-4 pr-[22px] whitespace-nowrap"
      >
        <span>{{ project.name }}</span>
        <span class="hidden sm:block text-[9.8vw] leading-[1.2]">.</span>
      </h2>
    </div>
    <div
      class="right md:w-1/2 pt-[56.2%] md:pt-[33%] bg-cover bg-center"
      :style="{
        backgroundImage: 'url(' + `/projects/${project.image}` + ')',
      }"
    ></div>
  </router-link>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
  props: ["project"],
});
</script>

<style scoped></style>
