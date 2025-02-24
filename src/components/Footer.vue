<script setup>
import { ref } from 'vue'
import axios from 'axios'
const footerEmail = ref('')
const email = ref('')
const emailIsSent = ref(false)
const btnIsBlocked = ref(false)
const checkFooterEmail = function (event) {
  event.target.value = event.target.value.replace(/[^a-z0-9A-Z@.]/g, '')
  footerEmail.value = event.target.value
}
const sendAnEmail = async function () {
  try {
    btnIsBlocked.value = true
    const obj = {
      email: footerEmail.value,
    }
    await axios.post('https://6acf7dc6ba5f73aa.mokky.dev/emails', obj)
    emailIsSent.value = true
    btnIsBlocked.value = false
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div>
    <div class="px-12 py-4 w-full">
      <div class="px-14 mb-4 border-t border-top-color"></div>
      <div class="footer-container-33 mb-4 justify-between pl-8">
        <div class="border-r container">
          <div class="relative">
            <div class="absolute -z-1 bg1 rounded-full w-19 h-19"></div>
            <img src="../assets/images/footer-plant1.png" alt="footer-plant1.png" />
          </div>

          <h3 class="mt-2 mb-2 text-lg">Garden Care</h3>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>

        <div class="border-r container">
          <div class="mb-3 relative">
            <div class="absolute -z-1 bg2 rounded-full w-19 h-19"></div>
            <img src="../assets/images/footer-plant2.png" alt="footer-plant1.png" />
          </div>
          <h3 class="mb-2 text-lg">Plant Renovation</h3>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div class="border-r container">
          <div class="mb-3 relative">
            <div class="absolute -z-1 bg3 rounded-full w-19 h-19"></div>
            <img src="../assets/images/footer-plant3.png" alt="footer-plant1.png" />
          </div>
          <h3 class="mb-2 text-lg">Watering Graden</h3>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div class="">
          <h3 class="text-lg mb-4">Would you like to join newsletters?</h3>
          <div class="flex mb-4">
            <input
              v-model="email"
              @input="checkFooterEmail"
              type="text"
              class="input-footer pl-2 px-2"
              placeholder="enter your e-mail..."
              maxlength="75"
            /><button
              :class="{ noClickFooter: btnIsBlocked }"
              @click="
                () => {
                  email = ''
                  sendAnEmail()
                }
              "
              class="rounded-tr-lg rounded-br-lg text-base footer-btn w-20 h-10"
            >
              Join
            </button>
          </div>
          <p>
            We usually post offers and challenges in newsletter. We're your online houseplant
            destination. We offer a wide range of houseplants and accessories shipped directly from
            our (green)house to yours!
          </p>
        </div>
      </div>

      <div class="footer-container-3 items-center justify-between h-22 px-4 container2 mb-4">
        <div class="pl-4"><img src="../assets/images/Logo.svg" alt="Logo.jpg" /></div>
        <div>
          <div class="flex">
            <img src="../assets/images/Location.svg" alt="Location.jpg" class="mr-2" />
            <div class="w-48">70 West Buckingham Ave. Farmingdale, NY 11735</div>
          </div>
        </div>
        <div>
          <div class="flex">
            <img src="../assets/images/Message.svg" alt="Message.jpg" class="mr-2" />
            <div>
              contact@ <br class="footer-br" />
              greenshop.com
            </div>
          </div>
        </div>
        <div>
          <div class="flex">
            <img src="../assets/images/Calling.svg" alt="Calling.jpg" class="mr-2" />
            <div>+88 01911 717 490</div>
          </div>
        </div>
      </div>

      <div class="flex justify-between h-22 px-8 footer-container-3 mb-2 h-56">
        <div class="footer-container-3-1">
          <h3 class="mb-3 text-lg">About us</h3>
          <p class="mb-2 p-cont-3">About us</p>
          <p class="mb-2 p-cont-3">Our stores</p>
          <p class="mb-2 p-cont-3">Contact us</p>
          <p class="mb-2 p-cont-3">Career</p>
          <p class="mb-2 p-cont-3">Specials</p>
        </div>

        <div class="footer-container-3-1">
          <h3 class="mb-3 text-lg">Help & Guide</h3>
          <p class="mb-2 p-cont-3">Help Center</p>
          <p class="mb-2 p-cont-3">How to Buy</p>
          <p class="mb-2 p-cont-3">Shipping & Delivery</p>
          <p class="mb-2 p-cont-3">Product Policy</p>
          <p class="mb-2 p-cont-3">How to Return</p>
        </div>
        <div class="footer-container-3-1">
          <h3 class="mb-3 text-lg">Categories</h3>
          <p class="mb-2 p-cont-3">House Plants</p>
          <p class="mb-2 p-cont-3">Potter Plants</p>
          <p class="mb-2 p-cont-3">Seeds</p>
          <p class="mb-2 p-cont-3">Small Plants</p>
          <p class="mb-2 p-cont-3">Accessories</p>
        </div>
        <div class="footer-container-3-1">
          <h3 class="mb-4 text-lg">Social Media</h3>
          <div class="flex mb-6 justify-between w-50">
            <a disabled href="#"
              ><div class="w-8 h-8 img-container-contacts flex justify-center items-center">
                <img src="../assets/images/Facebook.svg" alt="Facebook.jpg" /></div
            ></a>
            <a disabled href="#"
              ><div class="w-8 h-8 img-container-contacts flex justify-center items-center">
                <img src="../assets/images/Instagram.svg" alt="Instagram.jpg" /></div
            ></a>
            <a disabled href="#"
              ><div class="w-8 h-8 img-container-contacts flex justify-center items-center">
                <img src="../assets/images/Twitter.svg" alt="Twitter.jpg" /></div
            ></a>

            <a disabled href="#"
              ><div class="w-8 h-8 img-container-contacts flex justify-center items-center">
                <img src="../assets/images/Linkedin.svg" alt="Linkedin.jpg" /></div
            ></a>
            <a disabled href="#"
              ><div class="w-8 h-8 img-container-contacts flex justify-center items-center">
                <img src="../assets/images/Union.svg" alt="Union.jpg" /></div
            ></a>
          </div>
          <h3 class="mb-4 text-lg">We accept</h3>
          <div><img src="../assets/images/we-accept.png" alt="We-accept.jpg" /></div>
        </div>
      </div>
      <div class="last-sign flex justify-center">
        <p>© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </div>
    <div v-if="emailIsSent">
      <div
        @click="
          () => {
            emailIsSent = false
          }
        "
        class="fixed top-0 left-0 h-full w-full bg-black z-20 opacity-70"
      ></div>
      <div class="fixed z-30 email-bg rounded-3xl">
        <div class="flex justify-between mt-6">
          <div></div>
          <svg
            @click="
              () => {
                emailIsSent = false
              }
            "
            class="mr-6 hovercolor clickcolor cursor-pointer"
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
        <div class="grid justify-center items-center">
          <div class="flex justify-center items-center">
            <img class="w-64 h-64" src="../assets/images/done.png" alt="Done.png" />
          </div>
          <h1 class="flex justify-center email-h1 mt-5 mb-2">
            You have almost subscribed for our newsletters!
          </h1>
          <p class="flex justify-center mb-4">
            Please, check your email to to confirm your subscription
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';

h3 {
  font-family: 'CeraPro-Bold', normal;
}
p {
  color: $descr-color;
}
.footer-btn {
  font-family: 'CeraPro-Bold', normal;
  background-color: $def-color;
  color: white;
  box-shadow: 10px;
  box-shadow: 5px 5px 5px 0px rgb(219, 218, 218);
  &:hover {
    background-color: $hover-color;
  }
  &:active {
    background-color: $click-color;
  }
}
.input-footer {
  border-radius: 8px 0px 0px 8px;
  box-shadow: 5px 5px 5px 0px rgb(219, 218, 218);
  outline: none;
  border-bottom: 1px solid rgb(226, 224, 224);
  border-top: 1px solid rgb(226, 224, 224);
  border-left: 1px solid rgb(226, 224, 224);
}
.bg1 {
  background-color: #46a35822;
  top: 20px;
  left: -10px;
}
.bg2 {
  background-color: #46a35822;
  top: 17px;
  left: -17px;
}
.bg3 {
  background-color: #46a35822;
  top: 15px;
  left: -9px;
}
.container {
  border-color: #46a3581a;
  padding-right: 16px;
}

.container2 {
  background-color: #46a3581a;
  border-top: 1px solid #46a35889;
  border-bottom: 1px solid #46a35889;
}
.ref3 {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
.img-container-contacts {
  border: 1px solid $def-color;
  border-radius: 6px;
  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
    transition: all 0.5s;
  }
  &:active {
    border-color: $click-color;
  }
}
.footer-container-3 {
  display: grid;
  grid-template-columns: 23% 23% 23% 28%;
}

.footer-container-33 {
  display: grid;
  grid-template-columns: 21% 21% 21% 30%;
}
.last-sign {
  border-top: 1px solid #46a35834;
}
.p-cont-3 {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
.border-top-color {
  border-color: #46a35889;
}
.footer-br {
  display: none;
}
.noClickFooter {
  pointer-events: none;
  cursor: default;
  opacity: 0.5;
}
.email-bg {
  height: 450px;
  width: 700px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  top: 50%;
  background-color: rgb(255, 255, 255);
}
.email-h1 {
  font-family: 'CeraPro-Bold', normal;
  font-size: 28px;
  color: $text-color;
}
.hovercolor:hover {
  fill: $def-color;
}
.clickcolor:active {
  fill: $click-color;
}
</style>
