<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: String,
  price: Number,
  imageUrl: String,
  image2Url: String,
  giveAnItem: Function,
  isAdded: Boolean,
  quantity: Number,
  quantityPlus: Function,
  quantityMinus: Function,
  isFavourite: Boolean,
  checkIfFavourite: Function,
})
const isIconsBlockShowed = ref(false)
const isBigItemShow = ref(false)
const urlForBigPic = ref(props.imageUrl)

const numOfPicActive = ref(1)

function bigItemShow() {
  isBigItemShow.value = !isBigItemShow.value
  numOfPicActive.value = 1
}
function showIconsBlock() {
  isIconsBlockShowed.value = true
}
function dontShowIconsBlock() {
  isIconsBlockShowed.value = false
}
function changeUrlForBigPic(event) {
  urlForBigPic.value = event.target.src
}
</script>

<template>
  <div>
    <div class="shop-item max-w-48" @mouseover="showIconsBlock" @mouseout="dontShowIconsBlock">
      <div @click="bigItemShow" class="cursor-pointer">
        <img :src="imageUrl" alt="" />
      </div>
      <div class="flex justify-center mb-2">
        <div class="flex justify-between w-21" v-show="isIconsBlockShowed">
          <div class="w-6 h-6 hovercolor cursor-pointer focuscolor" @click="giveAnItem">
            <svg
              v-if="!isAdded"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1567 20.25H9.89163C6.79003 20.25 4.26667 17.7267 4.26667 14.6251V8.85947C4.26667 5.9762 2.82958 3.30739 0.422521 1.72031C-0.00975775 1.43531 -0.129101 0.853876 0.155897 0.421598C0.440896 -0.0107278 1.02228 -0.130118 1.45465 0.154974C2.82874 1.06097 3.94351 2.2559 4.74067 3.63167C4.91293 3.82466 6.30202 5.29699 8.57919 5.29699H19.3748C22.3201 5.24191 24.6254 8.19769 23.8554 11.0406L22.6126 15.9939C21.9839 18.4998 19.7404 20.25 17.1567 20.25ZM5.90513 6.64234C6.06099 7.36238 6.14166 8.10483 6.14166 8.85947V14.6251C6.14166 16.6928 7.8239 18.375 9.89163 18.375H17.1567C18.8792 18.375 20.3748 17.2082 20.794 15.5376L22.0367 10.5844C22.4943 8.89509 21.1243 7.13931 19.3748 7.17198H8.57914C7.54926 7.17198 6.65283 6.94993 5.90513 6.64234ZM9.42289 22.8281C9.42289 22.1809 8.89822 21.6563 8.25102 21.6563C6.69609 21.7182 6.69745 23.9387 8.25102 24C8.89822 24 9.42289 23.4753 9.42289 22.8281ZM18.751 22.8281C18.751 22.1809 18.2263 21.6563 17.5791 21.6563C16.0242 21.7182 16.0255 23.9387 17.5791 24C18.2263 24 18.751 23.4753 18.751 22.8281ZM20.3123 9.98446C20.3123 9.46668 19.8925 9.04697 19.3748 9.04697H8.95414C7.71027 9.09647 7.71121 10.8729 8.95414 10.922H19.3748C19.8925 10.922 20.3123 10.5022 20.3123 9.98446Z"
              />
            </svg>
            <img
              v-if="isAdded"
              class="w-6 h-6"
              src="../assets/images/AddedToCart.png"
              alt="AddedToCart.jpg"
            />
          </div>

          <div class="hovercolor w-6 h-6 cursor-pointer focuscolor" @click="checkIfFavourite">
            <svg
              v-if="!isFavourite"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18.8873C9.71527 18.8873 9.44077 18.7842 9.22684 18.5968C8.41888 17.8903 7.63992 17.2264 6.95267 16.6408L6.94916 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630341 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563507 3.94485 1.58661 2.83508C2.62192 1.71219 4.04251 1.09375 5.58716 1.09375C6.74164 1.09375 7.79892 1.45874 8.72955 2.1785C9.19922 2.54181 9.62494 2.98645 10 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8059 13.4378 15.0661 14.9205 13.0515 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 10 18.8873ZM5.58716 2.26532C4.37363 2.26532 3.25882 2.74963 2.44781 3.62915C1.62476 4.52194 1.17142 5.75607 1.17142 7.10434C1.17142 8.52692 1.70013 9.79919 2.88559 11.2296C4.03137 12.6122 5.73563 14.0645 7.70889 15.7462L7.71255 15.7492C8.4024 16.3371 9.18442 17.0036 9.99832 17.7153C10.8171 17.0023 11.6003 16.3347 12.2916 15.7458C14.2647 14.0642 15.9688 12.6122 17.1146 11.2296C18.2999 9.79919 18.8286 8.52692 18.8286 7.10434C18.8286 5.75607 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6264 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9872 3.10516C11.3449 3.60199 10.8975 4.23004 10.6352 4.66949C10.5003 4.89548 10.2629 5.03036 10 5.03036C9.73709 5.03036 9.49966 4.89548 9.36478 4.66949C9.10263 4.23004 8.65524 3.60199 8.01285 3.10516C7.29218 2.54791 6.47598 2.26532 5.58716 2.26532Z"
              />
            </svg>
            <img
              src="../assets/images/AddedHeart.png"
              alt="Heart.jpg"
              class="w-6 h-6"
              v-if="isFavourite"
            />
          </div>
        </div>
      </div>
      <div @click="bigItemShow" class="cursor-pointer">
        <p>{{ title }}</p>
        <p>${{ price }}.00</p>
      </div>
    </div>
    <div v-if="isBigItemShow">
      <div
        class="fixed top-0 left-0 h-full w-full bg-black z-20 opacity-70"
        @click="bigItemShow"
      ></div>
      <div class="fixed z-30 big-item-bg rounded-3xl">
        <div class="flex justify-between">
          <div></div>
          <svg
            @click="bigItemShow"
            class="mr-4 mt-2 hovercolor clickcolor cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"
            ></path>
          </svg>
        </div>
        <div class="pics-and-buttons px-8">
          <div class="flex pics-grid justify-around">
            <div>
              <div
                :class="{ bigItemSmallPicActive: numOfPicActive === 1 }"
                @click="numOfPicActive = 1"
              >
                <img
                  @click="changeUrlForBigPic"
                  :src="imageUrl"
                  alt="Plant-picture.jpg"
                  class="cursor-pointer"
                />
              </div>
              <div
                :class="{ bigItemSmallPicActive: numOfPicActive === 2 }"
                @click="numOfPicActive = 2"
              >
                <img
                  @click="changeUrlForBigPic"
                  :src="image2Url"
                  alt="Plant-picture.jpg"
                  class="cursor-pointer"
                />
              </div>
              <div
                :class="{ bigItemSmallPicActive: numOfPicActive === 3 }"
                @click="numOfPicActive = 3"
              >
                <img
                  @click="changeUrlForBigPic"
                  :src="imageUrl"
                  alt="Plant-picture.jpg"
                  class="cursor-pointer"
                />
              </div>
              <div
                :class="{ bigItemSmallPicActive: numOfPicActive === 4 }"
                @click="numOfPicActive = 4"
              >
                <img
                  @click="changeUrlForBigPic"
                  :src="image2Url"
                  alt="Plant-picture.jpg"
                  class="cursor-pointer"
                />
              </div>
            </div>
            <div>
              <img :src="urlForBigPic" alt="" class="big-pic" />
            </div>
          </div>
          <div>
            <h1 class="big-item-name mb-2">{{ title }}</h1>
            <p class="big-item-price">${{ price }}.00</p>
            <h3 class="big-item-short-description-name mt-2 mb-2">Short Description:</h3>
            <p class="big-item-short-description mb-8">
              The ceramic cylinder planters come with a wooden stand to help elevate your plants off
              the ground. The ceramic cylinder planters come with a wooden stand to help elevate
              your plants off the ground.
            </p>
            <div class="flex items-center">
              <button
                class="big-item-btn rounded-full w-8 h-9"
                v-show="isAdded"
                @click="quantityMinus"
                :class="{ bigItemBtnNotActive: quantity === 0 }"
              >
                -
              </button>
              <p v-show="isAdded" class="text-2xl ml-3 mr-3 big-item-number">{{ quantity }}</p>
              <button
                v-show="isAdded"
                class="big-item-btn rounded-full w-8 h-9 mr-3"
                @click="quantityPlus"
                :class="{ bigItemBtnNotActive: quantity === 9 }"
              >
                +
              </button>
              <button
                @click="giveAnItem"
                v-show="!isAdded"
                class="big-item-btn-add rounded-lg uppercase w-32 h-10 mr-3"
              >
                Add to cart
              </button>
              <button
                @click="giveAnItem"
                v-show="isAdded"
                class="big-item-btn-remove rounded-lg uppercase w-32 h-10 mr-3"
              >
                Remove from cart
              </button>
              <button>
                <div
                  @click="checkIfFavourite"
                  class="hovercolor w-10 h-10 items-center flex justify-center cursor-pointer focuscolor big-item-btn-remove big-item-btn-heart rounded-lg"
                >
                  <svg
                    v-if="!isFavourite"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 18.8873C9.71527 18.8873 9.44077 18.7842 9.22684 18.5968C8.41888 17.8903 7.63992 17.2264 6.95267 16.6408L6.94916 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630341 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563507 3.94485 1.58661 2.83508C2.62192 1.71219 4.04251 1.09375 5.58716 1.09375C6.74164 1.09375 7.79892 1.45874 8.72955 2.1785C9.19922 2.54181 9.62494 2.98645 10 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8059 13.4378 15.0661 14.9205 13.0515 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 10 18.8873ZM5.58716 2.26532C4.37363 2.26532 3.25882 2.74963 2.44781 3.62915C1.62476 4.52194 1.17142 5.75607 1.17142 7.10434C1.17142 8.52692 1.70013 9.79919 2.88559 11.2296C4.03137 12.6122 5.73563 14.0645 7.70889 15.7462L7.71255 15.7492C8.4024 16.3371 9.18442 17.0036 9.99832 17.7153C10.8171 17.0023 11.6003 16.3347 12.2916 15.7458C14.2647 14.0642 15.9688 12.6122 17.1146 11.2296C18.2999 9.79919 18.8286 8.52692 18.8286 7.10434C18.8286 5.75607 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6264 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9872 3.10516C11.3449 3.60199 10.8975 4.23004 10.6352 4.66949C10.5003 4.89548 10.2629 5.03036 10 5.03036C9.73709 5.03036 9.49966 4.89548 9.36478 4.66949C9.10263 4.23004 8.65524 3.60199 8.01285 3.10516C7.29218 2.54791 6.47598 2.26532 5.58716 2.26532Z"
                    />
                  </svg>
                  <img
                    src="../assets/images/AddedHeart.png"
                    alt="Heart.jpg"
                    class="w-6 h-6"
                    v-if="isFavourite"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="px-8 mt-8">
          <h3 class="mb-4 big-item-short-description-name">Product Description</h3>
          <p class="big-item-short-description">
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off
            the ground. The ceramic cylinder planters come with a wooden stand to help elevate your
            plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
            Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
            cursus eu, suscipit id nulla. <br />
            <br />
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum
            turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce
            aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue
            nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor,
            lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.
            Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus,
            in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand
            to help elevate your plants off the ground.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';
.shop-item {
  width: 100%;
  height: 350px;
  &:hover {
    border-top: 1px solid $def-color;
    color: $def-color;
  }
}
.focuscolor:active {
  color: $click-color;
  fill: $click-color;
}
.hovercolor:hover {
  fill: $def-color;
}
.clickcolor:active {
  fill: $click-color;
}
.big-item-bg {
  height: 80%;
  width: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  min-width: 922px;
  min-height: 680px;
  max-width: 1728px;
  max-height: 1086px;
  background-color: rgb(255, 255, 255);
}
@media (min-width: 1500px) {
  .big-item-bg {
    height: 70%;
  }
}
@media (min-width: 1900px) {
  .big-item-bg {
    height: 60%;
  }
}
.pics-and-buttons {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 45% 45%;
}
.pics-grid {
  display: grid;
  grid-template-columns: 17% 66%;
}
.big-pic {
  width: 100%;
  height: 100%;
}
.big-item-name {
  font-family: 'CeraPro-Bold', normal;
  font-size: 28px;
  color: $text-color;
}
.big-item-price {
  font-family: 'CeraPro-Bold', normal;
  font-size: 22px;
  color: $def-color;
  border-bottom: 1px solid #46a35880;
}
.big-item-short-description-name {
  font-family: 'CeraPro-Medium', normal;
  font-size: 15px;
  color: $text-color;
}
.big-item-short-description {
  font-size: 14px;
  line-height: 24px;
  color: $descr-color;
}
.big-item-btn {
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
.bigItemBtnNotActive {
  opacity: 50%;
  &:hover {
    background-color: $def-color;
  }
  &:active {
    background-color: $def-color;
  }
  cursor: auto;
}
.big-item-btn-add {
  background-color: $def-color;
  color: white;
  font-size: 14px;
  font-family: 'CeraPro-Bold', normal;
  &:hover {
    background-color: $hover-color;
  }
  &:active {
    background-color: $click-color;
  }
}
.big-item-number {
  color: $text-color;
}
.big-item-btn-remove {
  color: $def-color;
  border: 2px solid $def-color;
  font-size: 12px;
  font-family: 'CeraPro-Bold', normal;
  &:hover {
    background-color: rgb(241, 240, 240);
  }
  &:active {
    background-color: rgb(231, 230, 230);
  }
}

.big-item-btn-heart {
  fill: $def-color;
  stroke: $def-color;
}
.bigItemSmallPicActive {
  border: 1px solid $def-color;
}
</style>
