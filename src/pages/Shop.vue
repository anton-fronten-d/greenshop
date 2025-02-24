<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ShopMenuAndBanner from '../components/ShopMenuAndBanner.vue'
import ShopItemList from '../components/ShopItemList.vue'
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
const activeClassHeader = ref('shop')
const items = ref([])
const itemsToCount = ref([])
const filters = ref('?sortBy=title')
const showInputs = ref(true)

const sortBy = function (filter) {
  filters.value = filter.value
}
const getSize = function (data) {
  if (data === '?sortBy=title') {
    showInputs.value = true
  } else {
    showInputs.value = false
  }
  filters.value = data
}
const cart = ref(JSON.parse(localStorage.getItem('GreenshopCart')) || [])

const checkIfFavourite = async function (item) {
  try {
    if (!item.isFavourite) {
      const obj = {
        parentId: item.id,
        item,
      }

      item.isFavourite = true
      const { data } = await axios.post('https://6acf7dc6ba5f73aa.mokky.dev/favourites', obj)
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

const checkingCart = function (item) {
  if (item.isAdded === false) {
    addToCart(item)
  } else {
    removeFromCart(item)
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

const loadItems = async function () {
  try {
    const { data } = await axios.get('https://6acf7dc6ba5f73aa.mokky.dev/items' + filters.value)
    items.value = data.map((obj) => ({
      ...obj,
      isFavourite: false,
      isAdded: false,
      quantity: 0,
    }))
    checkIfItemIsAdded()
    checkItemQuantity()
  } catch (err) {
    console.log(err)
  }
}

const loadFavourites = async () => {
  try {
    const { data: favourites } = await axios.get('https://6acf7dc6ba5f73aa.mokky.dev/favourites')
    items.value = items.value.map((item) => {
      const favourite = favourites.find((favourite) => favourite.parentId === item.id)

      if (!favourite) {
        return item
      }

      return {
        ...item,
        isFavourite: true,
        favouriteId: favourite.id,
      }
    })
  } catch (err) {
    console.log(err)
  }
}
onMounted(async () => {
  await loadItems()
  await loadFavourites()
})

watch(
  cart.value,
  () => {
    localStorage.setItem('GreenshopCart', JSON.stringify(cart.value))
  },
  { deep: true },
)

watch(filters, async () => {
  await loadItems()
  await loadFavourites()
})
</script>

<template>
  <div>
    <Header :activeClassHeader="activeClassHeader" :cart="cart"> </Header>
    <div class="grid-container px-8 py-10 mb-20">
      <div>
        <ShopMenuAndBanner @change-size-category="getSize" :itemsToCount="itemsToCount" />
      </div>

      <div>
        <ShopItemList
          :showInputs="showInputs"
          @sortBy="sortBy"
          :items="items"
          @click-on-cart="checkingCart"
          @quantity-plus="quantityPlus"
          @quantity-minus="quantityMinus"
          @click-on-heart="checkIfFavourite"
        />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';
.grid-container {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 23% 67%;
}
</style>
