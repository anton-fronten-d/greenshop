<script setup>
import { ref } from 'vue'
const sliderPositionNumber = ref(1)
const sliderIsClicked = ref(false)
const isSliderButtonActive = ref(true)

const sliderPosition1 = function () {
  sliderIsClicked.value = true
  if (isSliderButtonActive.value) {
    isSliderButtonActive.value = false
    sliderPositionNumber.value = 1
    setTimeout(() => (isSliderButtonActive.value = true), 850)
  }
}
const sliderPosition2 = function () {
  sliderIsClicked.value = true
  if (isSliderButtonActive.value) {
    isSliderButtonActive.value = false
    sliderPositionNumber.value = 2
    setTimeout(() => (isSliderButtonActive.value = true), 850)
  }
}
const sliderPosition3 = function () {
  sliderIsClicked.value = true
  if (isSliderButtonActive.value) {
    isSliderButtonActive.value = false
    sliderPositionNumber.value = 3
    setTimeout(() => (isSliderButtonActive.value = true), 850)
  }
}

setInterval(() => {
  if (sliderIsClicked.value === false) {
    switch (sliderPositionNumber.value) {
      case 1:
        if (isSliderButtonActive.value) {
          isSliderButtonActive.value = false
          sliderPositionNumber.value = 2
          setTimeout(() => (isSliderButtonActive.value = true), 850)
        }
        break
      case 2:
        if (isSliderButtonActive.value) {
          isSliderButtonActive.value = false
          sliderPositionNumber.value = 3
          setTimeout(() => (isSliderButtonActive.value = true), 850)
        }
        break
      case 3:
        if (isSliderButtonActive.value) {
          isSliderButtonActive.value = false
          sliderPositionNumber.value = 1
          setTimeout(() => (isSliderButtonActive.value = true), 850)
        }
        break
    }
  }
}, 10000)
</script>

<template>
  <div class="pt-17 overflow-hidden w-full">
    <div class="flex min-w-300% home-slider flex relative">
      <transition>
        <div class="flex justify-between min-w-full px-8 pl-17" v-show="sliderPositionNumber === 1">
          <div>
            <p class="uppercase text-sm slider-welcome mb-4">Welcome to GreenShop</p>
            <h1 class="uppercase text-7xl slider-name w-150 mb-4">
              Let's Make a Better
              <span class="slider-name-planet">Planet</span>
            </h1>
            <p class="text-sm slider-description w-150 mb-11">
              We are an online plant shop offering a wide range of cheap and trendy plants. Use our
              plants to create an unique Urban Jungle. Order your favorite plants!
            </p>
            <RouterLink to="/shop">
              <button class="uppercase text-base slider-btn w-35 h-10 rounded-md">Shop now</button>
            </RouterLink>
          </div>
          <div class="relative">
            <img src="../assets/images/slider-plants.png" alt="plant.jpg" />
          </div>
        </div>
      </transition>
      <transition>
        <div class="flex justify-between min-w-full px-8 pl-17" v-show="sliderPositionNumber === 2">
          <div>
            <p class="uppercase text-sm slider-welcome mb-4">Welcome to BlueShop</p>
            <h1 class="uppercase text-7xl slider-name w-150 mb-4">
              Let's Make a Better
              <span class="slider-name-planet">Planet</span>
            </h1>
            <p class="text-sm slider-description w-150 mb-11">
              We are an online plant shop offering a wide range of cheap and trendy plants. Use our
              plants to create an unique Urban Jungle. Order your favorite plants!
            </p>
            <RouterLink to="/shop">
              <button class="uppercase text-base slider-btn w-35 h-10 rounded-md">
                Shop now
              </button></RouterLink
            >
          </div>

          <div class="relative">
            <img src="../assets/images/slider-plants.png" alt="plant.jpg" />
          </div>
        </div>
      </transition>
      <transition>
        <div class="flex justify-between min-w-full px-8 pl-17" v-show="sliderPositionNumber === 3">
          <div>
            <p class="uppercase text-sm slider-welcome mb-4">Welcome to GreenShop</p>
            <h1 class="uppercase text-7xl slider-name w-150 mb-4">
              Let's Make a Better
              <span class="slider-name-planet">Planet</span>
            </h1>
            <p class="text-sm slider-description w-150 mb-11">
              We are an online plant shop offering a wide range of cheap and trendy plants. Use our
              plants to create an unique Urban Jungle. Order your favorite plants!
            </p>
            <RouterLink to="/shop"
              ><button class="uppercase text-base slider-btn w-35 h-10 rounded-md">
                Shop now
              </button></RouterLink
            >
          </div>
          <div class="relative">
            <img src="../assets/images/slider-plants.png" alt="plant.jpg" />
          </div>
        </div>
      </transition>
    </div>

    <div class="flex flex-1 justify-center dots-container">
      <div
        class="dot1 dots rounded-full mr-1"
        @click="sliderPosition1"
        v-bind:class="{ activedot: sliderPositionNumber === 1 }"
      ></div>
      <div
        class="dot2 dots rounded-full"
        @click="sliderPosition2"
        v-bind:class="{ activedot: sliderPositionNumber === 2 }"
      ></div>
      <div
        class="dot3 dots rounded-full ml-1"
        @click="sliderPosition3"
        v-bind:class="{ activedot: sliderPositionNumber === 3 }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';
.slider-welcome {
  letter-spacing: 0.1vh;
  color: $text-color;
  font-family: 'CeraPro-Medium', normal;
}
.slider-name {
  font-family: 'CeraPro-Black', normal;
  color: $text-color;
}
.slider-name-planet {
  color: $def-color;
}
.slider-description {
  color: #727272;
  line-height: 24px;
}
.slider-btn {
  font-family: 'CeraPro-Bold', normal;
  background-color: $def-color;
  color: white;
  animation: slider-btn 3s infinite;
}
.slider-btn:hover {
  animation: none;
}
.slider-btn:active {
  background-color: $click-color;
}
@keyframes slider-btn {
  0% {
    transform: scale3d(1.1, 1.1, 1.11);
  }
  50% {
    transform: scale3d(0.95, 0.95, 0.95);
  }
  100% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
}
.dots {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  background-color: $def-color;
  opacity: 30%;
}
.dots-container {
  border-spacing: 10px;
}
.activedot {
  opacity: 100%;
}

.v-enter-active {
  transition: 0.8s;
}

.v-leave-active {
  transition: 0.8s;
}
.v-enter-from {
  transform: translate(100%, 0);
  position: absolute;
}
.v-leave-to {
  transform: translate(-100%, 0);
  position: absolute;
}
</style>
