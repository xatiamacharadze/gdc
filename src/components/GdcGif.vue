<template>
  <div class="w-full flex sm:px-[15px] pt-[20px] sm:pt-[34px] pb-[21px] sm:pb-[35px]">
    <div class="slot-icon">
      <img :src="GIcon" alt="g icon" class="disappear1">
      <img :src="WatermelonIcon" alt="gothic d icon" class="bounce10">
      <img :src="DollarIcon" alt="gothic d icon" class="switch1">

    </div>
    <div class="slot-icon ml-1 mr-1.5 middle">
      <img :src="DIcon" alt="d icon" class="bounce1">
      <img :src="GothicDIcon" alt="gothic d icon" class="bounce2">
      <img :src="RobotIcon" alt="gothic d icon" class="bounce3">
      <img :src="CoffeeIcon" alt="gothic d icon" class="bounce4">
      <img :src="BeerIcon" alt="gothic d icon" class="bounce5">
      <img :src="MicIcon" alt="gothic d icon" class="bounce6">
      <img :src="SmileIcon" alt="gothic d icon" class="bounce7">
      <img :src="EmailIcon" alt="gothic d icon" class="bounce8">
      <img :src="WatermelonIcon" alt="gothic d icon" class="bounce9">
      <img :src="DollarIcon" alt="gothic d icon" class="switch2">
    </div>
    <div class="slot-icon">
      <img :src="CIcon" alt="c icon" class="disappear2">
      <img :src="WatermelonIcon" alt="gothic d icon" class="bounce11">
      <img :src="DollarIcon" alt="gothic d icon" class="switch3">
    </div>
  </div>
</template>

<script setup lang="ts">
import GIcon from "@/assets/icons/g.svg";
import DIcon from "@/assets/icons/d.svg";
import CIcon from "@/assets/icons/c.svg";
import GothicDIcon from "@/assets/icons/gothic_d.svg";
import RobotIcon from "@/assets/icons/robot.svg";
import CoffeeIcon from "@/assets/icons/coffee.svg";
import BeerIcon from "@/assets/icons/beer.svg";
import MicIcon from "@/assets/icons/mic.svg";
import SmileIcon from "@/assets/icons/smile.svg";
import EmailIcon from "@/assets/icons/email.svg";
import WatermelonIcon from "@/assets/icons/watermelon.svg";
import DollarIcon from "@/assets/icons/dollar.svg";
</script>

<style lang="scss">
.middle {
  position: relative;
  &:before {
    @apply bg-black;
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    bottom: 0;
    right: -12px;

  }
}

.slot-icon {
  width: calc((100% - 10px) / 3);
  @apply relative pt-[38%];

  img {
    @apply absolute w-full top-0 left-0;
  }
}
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/


.bounce1 {
  -webkit-animation: bounce1 11s ease infinite;
  animation: bounce1 11s ease infinite;
}

@-webkit-keyframes bounce1 {
  0%, 9.4% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  10% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
  11% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  12.2% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  12.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

@keyframes bounce1 {
  0%, 9.4% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  10% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
  11% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  12.2% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  12.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce2 {
  -webkit-animation: bounce2 11s infinite;
  animation: bounce2 11s infinite;
}

@-webkit-keyframes bounce2 {
  0%, 12.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  12.4% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
    visibility: visible;
  }
  14% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }

  15% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }

  20% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  20.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

@keyframes bounce2 {
  0%, 12.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  12.4% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
    visibility: visible;
  }
  14% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }

  15% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }

  20% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  20.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce3 {
  -webkit-animation: bounce3 11s ease infinite;
  animation: bounce3 11s ease infinite;
}

@-webkit-keyframes bounce3 {
  0%, 20.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  22% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  23.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  28% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  28.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

@keyframes bounce3 {
  0%, 20.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  22% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  23.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  28% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  28.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce4 {
  -webkit-animation: bounce4 11s ease infinite;
  animation: bounce4 11s ease infinite;
}

@-webkit-keyframes bounce4 {
  0%, 28.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  30% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  31.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  36% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  36.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

@keyframes bounce4 {
  0%, 28.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  30% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  31.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  36% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  36.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce5 {
  -webkit-animation: bounce5 11s ease infinite;
  animation: bounce5 11s ease infinite;
}

@-webkit-keyframes bounce5 {
  0%, 36.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  38% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  39.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  44% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  44.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

@keyframes bounce5 {
  0%, 36.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  38% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  39.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  44% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  44.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce6 {
  -webkit-animation: bounce6 11s ease infinite;
  animation: bounce6 11s ease infinite;
}

@-webkit-keyframes bounce6 {
  0%, 44.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  46% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  47.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  52% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  52.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

@keyframes bounce6 {
  0%, 44.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  46% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  47.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  52% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  52.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce7 {
  -webkit-animation: bounce7 11s ease infinite;
  animation: bounce7 11s ease infinite;
}

@-webkit-keyframes bounce7 {
  0%, 52.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  54% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  55.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  60.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

@keyframes bounce7 {
  0%, 52.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  54% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  55.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  60.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce8 {
  -webkit-animation: bounce8 11s ease infinite;
  animation: bounce8 11s ease infinite;
}

@-webkit-keyframes bounce8 {
  0%, 60.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  62% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  63.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  68% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  68.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

@keyframes bounce8 {
  0%, 60.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  62% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  63.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  68% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  68.3%, 100% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce9 {
  -webkit-animation: bounce9 11s ease infinite;
  animation: bounce9 11s ease infinite;
}

@-webkit-keyframes bounce9 {
  0%, 68.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  70% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  71.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  89%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}

@keyframes bounce9 {
  0%, 68.3% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  70% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  71.3% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  89%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}

.disappear1 {
  -webkit-animation: disappear1 11s ease infinite;
  animation: disappear1 11s ease infinite;
}

@-webkit-keyframes disappear1 {
  0% {
    visibility: visible;
  }
  75%, 100% {
    visibility: hidden;
  }
}

@keyframes disappear1 {
  0% {
    visibility: visible;
  }
  75%, 100% {
    visibility: hidden;
  }
}

.bounce10 {
  -webkit-animation: bounce10 11s ease infinite;
  animation: bounce10 11s ease infinite;
}

@-webkit-keyframes bounce10 {
  0%, 75% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  77% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  78.2% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  86.7%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}

@keyframes bounce10 {
  0%, 75% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  77% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  78.2% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  86.7%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}

.disappear2 {
  -webkit-animation: disappear2 11s ease infinite;
  animation: disappear2 11s ease infinite;
}

@-webkit-keyframes disappear2 {
  0% {
    visibility: visible;
  }
  82%, 100% {
    visibility: hidden;
  }
}

@keyframes disappear2 {
  0% {
    visibility: visible;
  }
  82%, 100% {
    visibility: hidden;
  }
}

.bounce11 {
  -webkit-animation: bounce11 11s ease infinite;
  animation: bounce11 11s ease infinite;
}

@-webkit-keyframes bounce11 {
  0%, 82% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  84% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  84.7% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  91.4%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}

@keyframes bounce11 {
  0%, 82% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    visibility: hidden;
  }
  84% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    visibility: visible;
  }
  84.7% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    visibility: visible;
  }
  91.4%, 100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    visibility: hidden;
  }
}

.switch1 {
  -webkit-animation: switch1 11s ease infinite;
  animation: switch1 11s ease infinite;
}

@-webkit-keyframes switch1 {
  0%, 86.7% {
    visibility: hidden;
  }
  86.8%, 100% {
    visibility: visible;
  }
}

@keyframes switch1 {
  0%, 86.7% {
    visibility: hidden;
  }
  86.8%, 100% {
    visibility: visible;
  }
}

.switch2 {
  -webkit-animation: switch2 11s ease infinite;
  animation: switch2 11s ease infinite;
}

@-webkit-keyframes switch2 {
  0%, 89% {
    visibility: hidden;
  }
  89.1%, 100% {
    visibility: visible;
  }
}

@keyframes switch2 {
  0%, 89% {
    visibility: hidden;
  }
  89.1%, 100% {
    visibility: visible;
  }
}

.switch3 {
  -webkit-animation: switch3 11s ease infinite;
  animation: switch3 11s ease infinite;
}

@-webkit-keyframes switch3 {
  0%, 91.4% {
    visibility: hidden;
  }
  91.5%, 100% {
    visibility: visible;
  }
}

@keyframes switch3 {
  0%, 91.4% {
    visibility: hidden;
  }
  91.5%, 100% {
    visibility: visible;
  }
}

</style>