<template>
  <div class="gdc-container h-full flex flex-col justify-center items-center bg-color-animation">
    <div class="w-full sm:w-[580px]">
      <div class="text-div">
        <div class="hidden sm:block" v-html="desktopText1"></div>
        <div class="sm:hidden" v-html="mobileText1"></div>
      </div>
      <gdc-gif/>
      <div class="text-div">
        <div class="hidden sm:block" v-html="desktopText2"></div>
        <div class="sm:hidden" v-html="mobileText2"></div>
      </div>
    </div>

    <audio class="hidden" ref="audio" controls loop>
      <source :src="AudioFile" type="audio/mpeg">
    </audio>
  </div>
</template>

<script setup lang="ts">
import GdcGif from "@/components/GdcGif.vue";
import AudioFile from "@/assets/audio/audio.mp3";
</script>

<script lang="ts">
export default {
  name: 'HomeView',
  data() {
    return {
      desktopText1: "------------------------------------------------------------------------------------------------------------------ I'm building this page. Come back soon. ----------------- ------------------------------------------------------------------------------------------------------------------ AND DON'T WORRY. ---------------------------------------- I'M A LEGIT HUMAN BEING THAT DID STUFF IN REAL LIFE. ---- ------------------------------------------------------------------------------------------------------------------",
      desktopText2: "------------------------------------------------------------------------------------------------------------------ YOU CAN SEE SOME STUFF ON ----------------------------------------------------  <a class=\"link\" href='https://www.instagram.com/tresbien.agency/' target='_blank'>instagram</a>  ------------------------------------------------------------------------------------------------------------------------------------------------------ Or you can check me out on  <a class=\"link\" href='https://www.linkedin.com/in/guillaumedchampeau/' target='_blank'>linkedin</a>  ----- ----------------------- If you're serious like that. ---- ---------------------------------------------------------",
      mobileText1: "-------------------------------------------\n" +
        "-------------------------------------------\n" +
        "I'm building this page. Come back soon. --- ------------------------------------------- -------------------------------------------\n" +
        "AND DON'T WORRY. I'M A LEGIT HUMAN BEING --\n" +
        "THAT DID STUFF IN REAL LIFE.---------------\n" +
        "-------------------------------------------\n" +
        "-------------------------------------------",
      mobileText2: "-------------------------------------------\n" +
        "-------------------------------------------\n" +
        "YOU CAN SEE SOME STUFF ON -----------------\n" +
        "---------------------  <a class=\"link\" href='https://www.instagram.com/tresbien.agency/' target='_blank'>instagram</a>  ---------\n" +
        "-------------------------------------------\n" +
        "-------------------------------------------\n" +
        "Or you can check me out on  <a class=\"link\" href='https://www.linkedin.com/in/guillaumedchampeau/' target='_blank'>linkedin</a>  -----\n" +
        "--------- If you're serious like that. ---- -------------------------------------------",
    }
  },
  mounted() {
    const tryToPlay = setInterval(() => {
      this.$refs.audio.play()
        .then(() => {
          clearInterval(tryToPlay);
        })
        .catch(error => {
          console.info('User has not interacted with document yet.');
        });
    }, 1000);
  }
};

</script>

<style lang="scss">
.text-div {
  @apply uppercase text-[18px];
  letter-spacing: -0.7px;
  line-height: 1.12;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
}

.link {
  @apply bg-black text-white px-[10.3px] py-[1px] rounded-[4px] md:hover:text-orange;
}

.bg-color-animation {
  animation: bg-color-animation 11s ease infinite;
}

@keyframes bg-color-animation1 {
  0%, 85.6% {
    @apply bg-white;
  }

  85.7% {
    @apply bg-orange;
  }
  86.7% {
    @apply bg-blue;
  }
  87.7% {
    @apply bg-orange;
  }
  88.7% {
    @apply bg-green;
  }
  89.7% {
    @apply bg-orange;
  }
  90.7% {
    @apply bg-white;
  }
  91.7% {
    @apply bg-blue;
  }
  // switch2
  92.7% {
    @apply bg-orange;
  }
  93.7% {
    @apply bg-green;
  }
  94.7% {
    @apply bg-orange;
  }
  95.7% {
    @apply bg-white;
  }
  96.7% {
    @apply bg-blue;
  }
  //switch3
  97.7% {
    @apply bg-orange;
  }
  98.7% {
    @apply bg-green;
  }
  100% {
    @apply bg-orange;
  }
}

@media screen and (max-width: 639px) {
  .text-div {
    letter-spacing: -0.1vw;
    font-size: 3.5vw;
  }

  .link {
    @apply px-[2vw];
  }
}
</style>

