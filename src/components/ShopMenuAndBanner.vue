<script setup>
import { defineEmits, ref, onMounted } from 'vue'
import axios from 'axios'
const itemsToCount = ref([])

const loadItemsToCount = async function () {
  try {
    const { data } = await axios.get('https://6acf7dc6ba5f73aa.mokky.dev/items')
    itemsToCount.value = data
  } catch (err) {
    console.log(err)
  }
}

const emit = defineEmits(['changeSizeCategory'])
const changeSizeToSmall = function () {
  emit('changeSizeCategory', `?size=small`)
}
const changeSizeToMedium = function () {
  emit('changeSizeCategory', `?size=medium`)
}
const changeSizeToLarge = function () {
  emit('changeSizeCategory', `?size=large`)
}
const showAllSizes = function () {
  emit('changeSizeCategory', '?sortBy=title')
}

const countSmall = function () {
  let i = 0
  for (let item of itemsToCount.value) {
    if (item.size === 'small') {
      i++
    }
  }
  return i
}
function countMedium() {
  let i = 0
  for (let item of itemsToCount.value) {
    if (item.size === 'small') {
      i++
    }
  }
  return i
}
function countLarge() {
  let i = 0
  for (let item of itemsToCount.value) {
    if (item.size === 'small') {
      i++
    }
  }
  return i
}

onMounted(async () => {
  await loadItemsToCount()
})
</script>

<template>
  <div>
    <!-- Меню  магазина -->
    <div class="mb-27">
      <h3 class="mb-3 menu-name">Categories</h3>
      <div class="px-4 mb-4">
        <a disabled href="#" class="menu-category">
          <div class="flex justify-between mb-3">
            <p>House Plants</p>
            <p>(0)</p>
          </div>
        </a>
        <a disabled href="#" class="menu-category">
          <div class="flex justify-between mb-3">
            <p>Potter Plants</p>
            <p>(0)</p>
          </div>
        </a>
        <a disabled href="#" class="menu-category">
          <div class="flex justify-between mb-3">
            <p>Seeds</p>
            <p>(0)</p>
          </div>
        </a>
        <a disabled href="#" class="menu-category">
          <div class="flex justify-between mb-3">
            <p>Small Plants</p>
            <p>(0)</p>
          </div>
        </a>
        <a disabled href="#" class="menu-category">
          <div class="flex justify-between mb-3">
            <p>Big Plants</p>
            <p>(0)</p>
          </div>
        </a>
        <a disabled href="#" class="menu-category">
          <div class="flex justify-between mb-3">
            <p>Succulents</p>
            <p>(0)</p>
          </div>
        </a>
        <a disabled href="#" class="menu-category">
          <div class="flex justify-between mb-3">
            <p>Trerrariums</p>
            <p>(0)</p>
          </div>
        </a>
        <a disabled href="#" class="menu-category">
          <div class="flex justify-between mb-3">
            <p>Gardening</p>
            <p>(0)</p>
          </div>
        </a>
        <a disabled href="#" class="menu-category">
          <div class="flex justify-between mb-3">
            <p>Accessories</p>
            <p>(0)</p>
          </div>
        </a>
      </div>
      <h3 class="mb-3 menu-name">Size</h3>
      <div class="px-4">
        <div href="" class="menu-category">
          <div
            class="flex justify-between mb-3 cursor-pointer"
            value="small"
            @click="changeSizeToSmall()"
          >
            <p>Small</p>
            <p>({{ countSmall() }})</p>
          </div>
        </div>
        <div href="" class="menu-category">
          <div
            class="flex justify-between mb-3 cursor-pointer"
            value="medium"
            @click="changeSizeToMedium()"
          >
            <p>Medium</p>
            <p>({{ countMedium() }})</p>
          </div>
        </div>
        <div href="" class="menu-category">
          <div
            class="flex justify-between mb-3 cursor-pointer"
            value="large"
            @click="changeSizeToLarge()"
          >
            <p>Large</p>
            <p>({{ countLarge() }})</p>
          </div>
        </div>
      </div>
      <h3 class="mb-3 menu-name menu-show-all cursor-pointer" @click="showAllSizes">Show All</h3>
    </div>

    <!-- Баннер -->
    <div class="banner flex justify-center">
      <div>
        <div class="flex justify-center items-center">
          <img src="../assets/images/Super-Sale.svg" alt="" />
        </div>
        <div class="flex justify-center items-center">
          <h2 class="banner-name">UP TO 75% OFF</h2>
        </div>
        <div><img src="../assets/images/shop-banner-img.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';

.menu-name {
  font-size: 18px;
  font-family: 'CeraPro-Bold', normal;
}
.menu-category {
  &:hover {
    color: $def-color;
    text-decoration: underline;
  }
  &:active {
    color: $click-color;
    text-decoration: underline;
  }
}
.banner {
  background-image: url(../assets/images/shop-banner-bg.png);
}
.banner-name {
  font-size: 23px;
  font-family: 'CeraPro-Bold', normal;
}
.menu-show-all {
  color: $def-color;
  &:hover {
    color: $hover-color;
    text-decoration: underline;
  }
  &:active {
    color: $click-color;
    text-decoration: underline;
  }
}
</style>
