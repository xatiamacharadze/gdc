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

<style>
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

.bounce1 {
  animation: bounce1 11s ease infinite;
}

@keyframes bounce1 {
  0%, 9.4% {
    transform: translateY(0);
    visibility: visible;
  }
  10% {
    transform: translateY(-15px);
  }
  11% {
    transform: translateY(-5px);
  }
  12.2% {
    transform: translateY(5px);
  }
  12.3%, 100% {
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce2 {
  animation: bounce2 11s infinite;
}

@keyframes bounce2 {
  0%, 12.3% {
    transform: translateY(5px);
    visibility: hidden;
  }
  12.4% {
    transform: translateY(8px);
    visibility: visible;
  }
  14% {
    transform: translateY(15px);
    visibility: visible;
  }

  15% {
    transform: translateY(0);
    visibility: visible;
  }

  20% {
    transform: translateY(0);
    visibility: visible;
  }
  20.3%, 100% {
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce3 {
  animation: bounce3 11s ease infinite;
}

@keyframes bounce3 {
  0%, 20.3% {
    transform: translateY(5px);
    visibility: hidden;
  }
  22% {
    transform: translateY(15px);
    visibility: visible;
  }
  23.3% {
    transform: translateY(0);
    visibility: visible;
  }
  28% {
    transform: translateY(0);
    visibility: visible;
  }
  28.3%, 100% {
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce4 {
  animation: bounce4 11s ease infinite;
}

@keyframes bounce4 {
  0%, 28.3% {
    transform: translateY(5px);
    visibility: hidden;
  }
  30% {
    transform: translateY(15px);
    visibility: visible;
  }
  31.3% {
    transform: translateY(0);
    visibility: visible;
  }
  36% {
    transform: translateY(0);
    visibility: visible;
  }
  36.3%, 100% {
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce5 {
  animation: bounce5 11s ease infinite;
}

@keyframes bounce5 {
  0%, 36.3% {
    transform: translateY(5px);
    visibility: hidden;
  }
  38% {
    transform: translateY(15px);
    visibility: visible;
  }
  39.3% {
    transform: translateY(0);
    visibility: visible;
  }
  44% {
    transform: translateY(0);
    visibility: visible;
  }
  44.3%, 100% {
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce6 {
  animation: bounce6 11s ease infinite;
}

@keyframes bounce6 {
  0%, 44.3% {
    transform: translateY(5px);
    visibility: hidden;
  }
  46% {
    transform: translateY(15px);
    visibility: visible;
  }
  47.3% {
    transform: translateY(0);
    visibility: visible;
  }
  52% {
    transform: translateY(0);
    visibility: visible;
  }
  52.3%, 100% {
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce7 {
  animation: bounce7 11s ease infinite;
}

@keyframes bounce7 {
  0%, 52.3% {
    transform: translateY(5px);
    visibility: hidden;
  }
  54% {
    transform: translateY(15px);
    visibility: visible;
  }
  55.3% {
    transform: translateY(0);
    visibility: visible;
  }
  60% {
    transform: translateY(0);
    visibility: visible;
  }
  60.3%, 100% {
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce8 {
  animation: bounce8 11s ease infinite;
}

@keyframes bounce8 {
  0%, 60.3% {
    transform: translateY(5px);
    visibility: hidden;
  }
  62% {
    transform: translateY(15px);
    visibility: visible;
  }
  63.3% {
    transform: translateY(0);
    visibility: visible;
  }
  68% {
    transform: translateY(0);
    visibility: visible;
  }
  68.3%, 100% {
    transform: translateY(5px);
    visibility: hidden;
  }
}

.bounce9 {
  animation: bounce9 11s ease infinite;
}

@keyframes bounce9 {
  0%, 68.3% {
    transform: translateY(5px);
    visibility: hidden;
  }
  70% {
    transform: translateY(15px);
    visibility: visible;
  }
  71.3% {
    transform: translateY(0);
    visibility: visible;
  }
  89%, 100% {
    transform: translateY(0px);
    visibility: hidden;
  }
}

.disappear1 {
  animation: disappear1 11s ease infinite;
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
  animation: bounce10 11s ease infinite;
}

@keyframes bounce10 {
  0%, 75% {
    transform: translateY(5px);
    visibility: hidden;
  }
  77% {
    transform: translateY(15px);
    visibility: visible;
  }
  78.2% {
    transform: translateY(0);
    visibility: visible;
  }
  86.7%, 100% {
    transform: translateY(0px);
    visibility: hidden;
  }
}

.disappear2 {
  animation: disappear2 11s ease infinite;
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
  animation: bounce11 11s ease infinite;
}

@keyframes bounce11 {
  0%, 82% {
    transform: translateY(5px);
    visibility: hidden;
  }
  84% {
    transform: translateY(15px);
    visibility: visible;
  }
  84.7% {
    transform: translateY(0);
    visibility: visible;
  }
  91.4%, 100% {
    transform: translateY(0px);
    visibility: hidden;
  }
}

.switch1 {
  animation: switch1 11s ease infinite;
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
  animation: switch2 11s ease infinite;
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
  animation: switch3 11s ease infinite;
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