<script setup>
import Header from '../components/Header.vue'
import ShopItem from '../components/ShopItem.vue'
import Footer from '../components/Footer.vue'
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
const cart = ref(JSON.parse(localStorage.getItem('GreenshopCart')))
const items = ref([])

const checkingCart = function (item) {
  if (item.isAdded === false) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const quantityPlus = function (item) {
  if (item.quantity === 9) {
    item.quantity = 9
  } else {
    item.quantity++
    let cartItemIndex = cart.value.findIndex((cartItem) => {
      return cartItem.id === item.id
    })
    cart.value[cartItemIndex].quantity = item.quantity
  }
}

const quantityMinus = function (item) {
  if (item.quantity === 1) {
    removeFromCart(item)
  } else {
    item.quantity--

    let cartItemIndex = cart.value.findIndex((cartItem) => {
      return cartItem.id === item.id
    })
    cart.value[cartItemIndex].quantity = item.quantity
  }
}

const addToCart = function (item) {
  cart.value.push(item)
  item.isAdded = true
  item.quantity = 1
}

const removeFromCart = function (item) {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

const checkIfItemIsAdded = function () {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
  }))
}

const checkItemQuantity = function () {
  for (let item of items.value) {
    if (item.isAdded === true) {
      item.quantity = cart.value.find((cartItem) => cartItem.id === item.id).quantity
    }
  }
}

const loadFavourites = async () => {
  try {
    const { data: favourites } = await axios.get('https://6acf7dc6ba5f73aa.mokky.dev/favourites')
    let i = 0
    for (let favourite of favourites) {
      items.value.push(favourite.item)
      items.value[i].favouriteId = favourite.favouriteId
      i++
    }
    checkIfItemIsAdded()
    checkItemQuantity()
  } catch (err) {
    console.log(err)
  }
}

const checkIfFavourite = async function (item) {
  try {
    if (!item.isFavourite) {
      const obj = {
        parentId: item.id,
        item,
      }

      item.isFavourite = true
      const { data } = await axios.post('https://6acf7dc6ba5f73aa.mokky.dev/favourites', obj)
      console.log(data)
      item.favouriteId = data.id
      await axios.patch('https://6acf7dc6ba5f73aa.mokky.dev/favourites/' + item.favouriteId, {
        favouriteId: item.favouriteId,
      })
    } else {
      item.isFavourite = false
      await axios.delete('https://6acf7dc6ba5f73aa.mokky.dev/favourites/' + item.favouriteId)
      item.favouriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await loadFavourites()
})

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
    <div class="flex justify-center mt-10 mb-25">
      <h1>Favourites</h1>
    </div>
    <div v-if="items.length === 0" class="px-20 -mt-15">
      <div class="flex justify-center">
        <img src="../assets/images/emoji.png" alt="emoji.jpg" class="w-64 h-64" />
      </div>
      <div class="flex justify-center mt-4">
        <h3 class="empty-cart-h1 mb-10 mt-5">You do not have any "favourites" now</h3>
      </div>
    </div>
    <div class="grid-favourites px-20">
      <ShopItem
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :imageUrl="item.imageUrl"
        :image2Url="item.image2Url"
        :give-an-item="() => checkingCart(item)"
        :isAdded="item.isAdded"
        :quantity="item.quantity"
        :quantity-minus="() => quantityMinus(item)"
        :quantity-plus="() => quantityPlus(item)"
        :is-favourite="item.isFavourite"
        :check-if-favourite="() => checkIfFavourite(item)"
      />
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';
h1 {
  font-family: 'CeraPro-Bold', normal;
  font-size: 30px;
  color: $text-color;
}
.grid-favourites {
  display: grid;
  justify-content: space-around;
  grid-template-columns: 19% 19% 19% 19% 19%;
}
h3 {
  color: $text-color;
  font-family: 'CeraPro-Bold', normal;
  font-size: 18px;
}
</style>
