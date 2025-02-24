<script setup>
import ShopItem from '../components/ShopItem.vue'
import { ref, defineEmits } from 'vue'
import debounce from 'lodash.debounce'
const props = defineProps({
  items: Array,
  sortBy: String,
  showInputs: Boolean,
})
const filter = ref('?sortBy=title')
const changeTypeOfSorting = function (event) {
  if (event.target.value === 'name') {
    filter.value = '?sortBy=title'
  } else if (event.target.value === 'price') {
    filter.value = '?sortBy=price'
  } else if (event.target.value === '-price') {
    filter.value = '?sortBy=-price'
  }
  emit('sortBy', filter)
}

const searchInput = debounce(function (event) {
  if (!event.target.value) {
    filter.value = '?sortBy=title'
    emit('sortBy', filter)
  } else {
    filter.value = `?title=*${event.target.value}*`
    emit('sortBy', filter)
  }
}, 300)

const emit = defineEmits(['clickOnCart', 'quantityMinus', 'quantityPlus', 'clickOnHeart', 'sortBy'])
</script>

<template>
  <div>
    <div class="flex flex-1 mb-4 justify-between" v-if="showInputs">
      <div class="flex items-center">
        <input
          @input="
            (event) => {
              event.target.value = event.target.value.replace(/[^a-z A-Z]/g, '')
              searchInput(event)
            }
          "
          type="text"
          class="h-8 border-def rounded-md pl-2"
        />
        <div class="w-6 h-6 cursor-pointer ml-2">
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.5726 16.0029C10.5755 19.1865 4.988 18.3056 2.02842 14.6542C-0.828088 11.129 -0.64944 6.04347 2.44943 2.82482C5.65137 -0.500594 10.6854 -0.944524 14.3346 1.78337C15.642 2.76051 16.6183 4.00364 17.2542 5.50838C17.8938 7.02186 18.0881 8.59654 17.8663 10.2205C17.6452 11.837 17 13.2775 15.9499 14.6217C16.0349 14.6773 16.1255 14.7173 16.1904 14.7822C17.3448 15.9311 18.4947 17.0843 19.6491 18.2331C19.9227 18.5054 20.0589 18.8225 19.9776 19.2047C19.8165 19.9651 18.9107 20.2586 18.3298 19.7366C18.0575 19.4925 17.807 19.2234 17.5484 18.9649C16.6002 18.0177 15.6526 17.0699 14.7044 16.1227C14.665 16.0853 14.6238 16.0503 14.5726 16.0029ZM15.9605 8.98677C15.9705 5.12689 12.8529 2.00627 8.98261 2.00065C5.12292 1.99503 2.00781 5.09068 1.99094 8.94806C1.97408 12.8173 5.08544 15.9467 8.96762 15.9648C12.8117 15.9829 15.9505 12.8504 15.9605 8.98677Z"
            />
          </svg>
        </div>
      </div>
      <div class="flex items-center">
        <p class="mr-2">Sort by:</p>
        <select
          name=""
          id=""
          @change="changeTypeOfSorting"
          class="px-3 border-def rounded-md outline-none h-8"
        >
          <option value="name">Name</option>
          <option value="price">Price (lower)</option>
          <option value="-price">Price (higher)</option>
        </select>
      </div>
    </div>

    <div class="grid-container-list justify-between" v-auto-animate>
      <ShopItem
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :imageUrl="item.imageUrl"
        :image2Url="item.image2Url"
        :give-an-item="() => emit('clickOnCart', item)"
        :isAdded="item.isAdded"
        :quantity="item.quantity"
        :quantity-minus="() => emit('quantityMinus', item)"
        :quantity-plus="() => emit('quantityPlus', item)"
        :is-favourite="item.isFavourite"
        :check-if-favourite="() => emit('clickOnHeart', item)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';

.grid-container-list {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 350px 350px 350px;
}
.border-def {
  border: 1px solid $def-color;
}
</style>
