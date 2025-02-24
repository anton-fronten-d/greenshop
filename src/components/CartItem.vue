<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  price: Number,
  imageUrl: String,
  quantity: Number,
  removeFromCart: Function,
  quantityPlus: Function,
  quantityMinus: Function,
})
const total = computed(() => {
  return props.price * props.quantity
})
</script>

<template>
  <div class="cartItem-card-grid mb-4">
    <div class="flex items-center">
      <div class="w-18 h-18">
        <img :src="imageUrl" alt="Plant.jpg" />
      </div>
      <h4 class="cart-card-grid-name ml-3">{{ title }}</h4>
    </div>
    <div class="items-center flex cartItem-price">${{ price }}.00</div>
    <div class="items-center flex">
      <div class="flex items-center">
        <button
          @click="quantityMinus"
          class="cart-btn rounded-full w-5 h-6 items-center flex justify-center"
        >
          <p>-</p>
        </button>
        <p class="text-xl ml-3 mr-3">{{ quantity }}</p>
        <button
          :class="{ cartItemBtnNotActive: quantity === 9 }"
          @click="quantityPlus"
          class="cart-btn rounded-full w-5 h-6 mr-3 items-center flex justify-center"
        >
          <p>+</p>
        </button>
      </div>
    </div>

    <div class="items-center flex cartItem-total">${{ total }}.00</div>
    <div class="items-center flex">
      <button @click="removeFromCart">
        <img src="../assets/images/Delete.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';
.cartItem-card-grid {
  display: grid;
  grid-template-columns: 32% 12% 19% 17% 8%;
  justify-content: space-between;
}
.cart-card-grid-name {
  font-family: 'CeraPro-Medium', normal;
  font-size: 16px;
}
.cartItem-price {
  font-family: 'CeraPro-Medium', normal;
  font-size: 16px;
}
.cartItem-total {
  font-family: 'CeraPro-Bold', normal;
  color: $def-color;
  font-size: 16px;
}
.cart-btn {
  background-color: $def-color;
  color: white;
  font-size: 25px;
  &:hover {
    background-color: $hover-color;
  }
  &:active {
    background-color: $click-color;
  }
}
.cartItemBtnNotActive {
  opacity: 50%;
  &:hover {
    background-color: $def-color;
  }
  &:active {
    background-color: $def-color;
  }
  cursor: auto;
}
</style>
