<script setup></script>

<template>
  <div class="w-full">
    <div class="px-8 py-16 flex overflow-hidden justify-around ml-8">
      <div
        class="flex justify-between text-right items-center relative overflow-hidden px-2 pr-4 w-147"
      >
        <div><img src="../assets/images/advert-img1.png" alt="plant.jpg" /></div>
        <div class="py-4 px-4">
          <h1 class="advert-name uppercase w-37 h-15 inline-block">Summer cactus & succulents</h1>
          <p class="text-sm advert-description mb-11 w-73 h-11">
            We are an online plant shop offering a wide range of cheap and trendy plants
          </p>
          <div class="inline-block">
            <RouterLink to="/shop"
              ><div
                class="flex justify-center items-center text-base advert-btn w-35 h-10 rounded-md cursor-pointer"
              >
                <span>Find More</span>
                <img
                  src="../assets/images/ArrowRight.svg"
                  alt="arrow.jpg"
                  class="w-4 h-4 ml-1"
                /></div
            ></RouterLink>
          </div>
        </div>
        <div class="absolute rounded-full w-66 h-66 advert-circle border"></div>
        <div class="absolute rounded-full w-66 h-66 advert-circle2 border-2"></div>
      </div>

      <div
        class="flex justify-between text-right items-center relative overflow-hidden px-2 pr-4 w-147"
      >
        <div><img src="../assets/images/advert-img2.png" alt="plant.jpg" /></div>
        <div class="py-4 px-4">
          <h1 class="advert-name uppercase w-36 h-15 inline-block">Styling Trends & much more</h1>
          <p class="text-sm advert-description mb-11 w-73 h-11">
            We are an online plant shop offering a wide range of cheap and trendy plants
          </p>
          <div class="inline-block">
            <RouterLink to="/shop"
              ><div
                class="flex justify-center items-center text-base advert-btn w-35 h-10 rounded-md cursor-pointer"
              >
                <span>Find More</span>
                <img
                  src="../assets/images/ArrowRight.svg"
                  alt="arrow.jpg"
                  class="w-4 h-4 ml-1"
                /></div
            ></RouterLink>
          </div>
        </div>
        <div class="absolute rounded-full w-66 h-66 advert-circle border"></div>
        <div class="absolute rounded-full w-66 h-66 advert-circle2 border-2"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';

.advert-name {
  font-family: 'CeraPro-Black', normal;
  color: $text-color;
}
.advert-description {
  color: $descr-color;
  line-height: 24px;
}
.advert-btn {
  font-family: 'CeraPro-Medium', normal;
  background-color: $def-color;
  color: white;
  transition: all 0.5s;
}
.advert-btn:hover {
  transform: scale3d(1.1, 1.1, 1.1);
}
.advert-btn:active {
  background-color: $click-color;
}
.advert-circle {
  border-color: $def-color;
  top: 146px;
  right: 518px;
}
.advert-circle2 {
  border-color: $def-color;
  top: 156px;
  right: 508px;
}
</style>
