<template>
  <div class="row-1 h-full bg-white gdc-container">
    <div
      class="flex justify-end md:justify-between items-end h-full py-[14px] md:py-[30px] gap-10 md:gap-20 flex-col md:flex-row"
    >
      <div class="left self-start md:self-end">
        <p class="text-black uppercase">Hello, I'm</p>
        <img
          :src="NameIcon"
          alt="nino lekveishvili sign"
          class="max-w-[80%] md:w-auto"
        />
        <div class="flex flex-row md:flex-col items-center md:items-start">
          <p
            class="text-black text-[20px] md:text-lg uppercase leading-[0.8] whitespace-nowrap"
          >
            Art director &nbsp;
          </p>
          <p class="text-black uppercase">from tbilisi, georgia</p>
        </div>
      </div>
      <div class="w-full md:w-auto right relative">
        <div
          class="bg-red absolute p-[12.7%] rounded-full left-[32px] top-[-40px]"
        ></div>
        <img :src="NinoPhoto" alt="nino" class="w-full md:w-auto" />
      </div>
    </div>
  </div>
  <div class="row-1 h-full bg-grey flex items-center justify-center">
    <div
      class="max-w-none sm:max-w-[60%] lg:max-w-[840px] text-center leading-[0.8] flex sm:block flex-col items-center gap-0 sm:gap-2"
    >
      <div
        v-for="characteristic in characteristics"
        :key="characteristic"
        class="sm:inline-block items-center ml-1"
      >
        <div class="flex items-center">
          <div class="circle">•</div>
          <span class="leading-none uppercase font-regular text-black">
            {{ characteristic }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="row-2 h-full bg-white relative overflow-x-hidden">
    <div
      class="stripes-container flex gdc-container sm:px-0 justify-between sm:justify-evenly h-full"
    >
      <div
        v-for="n in 8"
        :key="n"
        class="w-[30px] h-full bg-cyan"
        :class="n > 4 ? 'hidden sm:block' : ''"
      ></div>
    </div>
    <div
      class="video-container absolute-center overflow-hidden w-[615px] pointer-events-none"
    >
      <div ref="youtube"></div>
      <!--      <iframe-->
      <!--        src="https://www.youtube.com/embed/rERiOu14jeA?controls=0&autoplay=1&loop=1&mute=1&showinfo=0&nologo=1&fs=0&rel=0&modestbranding=1&playlist=rERiOu14jeA"-->
      <!--        title="YouTube video player"-->
      <!--        frameborder="0"-->
      <!--        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"-->
      <!--        allowfullscreen-->
      <!--      ></iframe>-->
    </div>
  </div>
</template>

<script setup>
import { usePlayer } from "@vue-youtube/core";
import { ref } from "vue";

const videoId = ref("rERiOu14jeA");
const youtube = ref();

const { onReady, onStateChange, togglePlay } = usePlayer(videoId, youtube, {
  cookie: false,
  allow: "autoplay",
  playerVars: {
    fs: 0,
    modestbranding: 1,
    rel: 0,
    nologo: 1,
    controls: 0,
    autoplay: 1,
    mute: 1,
    showinfo: 0,
  },
});

onReady((event) => {
  togglePlay();
  event.target.playVideo();
});
onStateChange((event) => {
  event.target.playVideo();
});
</script>

<script>
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { HomeStore } from "@/stores/homeStore";
import NameIcon from "@/assets/images/nino_lekveishvili.svg";
import NinoPhoto from "@/assets/images/nino.png";

export default defineComponent({
  name: "HomeView",

  data: () => ({ NameIcon, NinoPhoto }),
  methods: {},
  computed: {
    ...mapState(HomeStore, ["characteristics"]),
  },
});
</script>

<style scoped>
.circle {
  @apply relative inline-block leading-[0.5] w-[24px] h-[24px] inline-block rounded-full text-center text-black text-[22px] py-[4px] border-black border-[1.8px];
}
</style>

<style>
.video-container {
  aspect-ratio: 16/9;
}

@media screen and (max-width: 800px) {
  .video-container {
    width: calc(100% - 28px);
  }
}
iframe {
  width: 300%;
  height: 100%;
  margin-left: -100%;
}
</style>
