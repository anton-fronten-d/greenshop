<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import CartItem from '../components/CartItem.vue'
import { ref, watch, computed } from 'vue'
const cart = ref(JSON.parse(localStorage.getItem('GreenshopCart')))

const subtotal = computed(() => {
  try {
    let i = 0
    for (let cartItem of cart.value) {
      i = i + cartItem.price * cartItem.quantity
    }
    return i
  } catch {
    return 0
  }
})

const countCartLength = computed(function () {
  try {
    if (cart.value.length === 0) {
      return true
    } else {
      return false
    }
  } catch {
    return true
  }
})
const shipping = computed(() => {
  return (subtotal.value * 0.03).toFixed(2)
})

const total = computed(() => {
  return +shipping.value + subtotal.value
})

const removeFromCart = function (cartItem) {
  cart.value.splice(cart.value.indexOf(cartItem), 1)
}

const quantityPlus = function (cartItem) {
  if (cartItem.quantity === 9) {
    cartItem.quantity = 9
  } else {
    cartItem.quantity++
  }
}

const quantityMinus = function (cartItem) {
  if (cartItem.quantity === 1) {
    removeFromCart(cartItem)
  } else {
    cartItem.quantity--
  }
}

watch(
  cart.value,
  () => {
    localStorage.setItem('GreenshopCart', JSON.stringify(cart.value))
  },
  { deep: true },
)
</script>

<template>
  <div>
    <Header :cart="cart"> </Header>
    <div class="px-8 cart py-8">
      <div class="cart-refs mb-12">
        <RouterLink to="/shop"><span class="cart-ref cursor-pointer">Shop</span></RouterLink>
        <span class="ml-1 mr-1">/</span>
        <span>Shopping Cart</span>
      </div>
      <div class="cart-grid">
        <div>
          <div class="cart-card-grid mb-3 cart-h2">
            <div><h2>Products</h2></div>
            <div><h2>Price</h2></div>
            <div><h2>Quantity</h2></div>
            <div><h2>Total</h2></div>
            <div></div>
          </div>
          <div v-if="countCartLength" class="mt-8">
            <div class="flex justify-center">
              <img src="../assets/images/package-icon.png" alt="Empty-Box.jpg" />
            </div>
            <div class="flex justify-center mt-4">
              <h1 class="empty-cart-h1">
                Your cart is empty now. Please, add at least one item to cart
              </h1>
            </div>
          </div>
          <div v-auto-animate>
            <CartItem
              v-for="cartItem in cart"
              :cartItem="cartItem"
              :key="cartItem.id"
              :title="cartItem.title"
              :price="cartItem.price"
              :imageUrl="cartItem.imageUrl"
              :quantity="cartItem.quantity"
              :remove-from-cart="
                () => {
                  removeFromCart(cartItem)
                }
              "
              :quantity-plus="
                () => {
                  quantityPlus(cartItem)
                }
              "
              :quantity-minus="
                () => {
                  quantityMinus(cartItem)
                }
              "
            />
          </div>
        </div>
        <div>
          <h1 class="cart-totals mb-5 cart-totals-p">Cart Totals</h1>
          <div class="flex justify-between mb-13 items-center">
            <p class="">Subtotal</p>
            <h2 class="cart-price">${{ subtotal }}.00</h2>
          </div>
          <div class="flex justify-between mb-13 items-center">
            <p>Shipping (3%)</p>
            <h2 class="cart-price">${{ shipping }}</h2>
          </div>
          <div class="flex justify-between mb-8 items-center">
            <p class="cart-total">Total</p>
            <h2 class="cart-total-price">${{ total }}</h2>
          </div>
          <RouterLink to="/checkout" :class="{ noClick: countCartLength }">
            <div class="flex justify-center items-center">
              <button class="cart-btn-proceed h-10 rounded-md">Proceed To Checkout</button>
            </div>
          </RouterLink>
          <div class="flex justify-center items-center cart-btn-continue h-10 mt-3">
            <RouterLink to="/shop"
              ><button class="cart-btn-continue">Continue Shopping</button></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';
.cart {
  color: $text-color;
}
.cart-grid {
  display: grid;
  grid-template-columns: 60% 30%;
  justify-content: space-between;
}
.cart-totals {
  padding-bottom: 12px;
  border-bottom: 1px solid $def-color;
  font-family: 'CeraPro-Bold', normal;
  font-size: 18px;
}
.cart-total {
  font-family: 'CeraPro-Bold', normal;
  font-size: 16px;
}
.cart-price {
  font-family: 'CeraPro-Medium', normal;
  font-size: 18px;
}
.cart-btn-proceed {
  width: 100%;
  background-color: $def-color;
  color: white;
  font-family: 'CeraPro-Bold', normal;
  font-size: 15px;
  &:hover {
    background-color: $hover-color;
  }
  &:active {
    background-color: $click-color;
  }
}
.cart-btn-continue {
  width: 100%;
  background-color: white;
  color: $def-color;
  font-size: 15px;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: $click-color;
  }
}
.cart-total-price {
  font-family: 'CeraPro-Bold', normal;
  font-size: 18px;
  color: $def-color;
}
.cart-ref:hover {
  text-decoration: underline;
}
.cart-card-grid {
  display: grid;
  grid-template-columns: 32% 12% 19% 17% 8%;
  justify-content: space-between;
  border-bottom: 1px solid $def-color;
  margin-top: 15px;
}
.cart-h2 {
  font-family: 'CeraPro-Medium', normal;
  font-size: 16px;
}
.noClick {
  pointer-events: none;
  cursor: default;
  opacity: 0.5;
}
.empty-cart-h1 {
  color: $text-color;
  font-family: 'CeraPro-Bold', normal;
  font-size: 18px;
}
</style>
