<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'
import axios from 'axios'
const cart = ref(JSON.parse(localStorage.getItem('GreenshopCart')))
const activePayMethod = ref('')
const howToPay = ref('')
const OrderFirstName = ref('')
const OrderLastName = ref('')
const OrderCountry = ref('')
const OrderCity = ref('')
const OrderStreetAdress = ref('')
const OrderPhoneNumber = ref('')
const OrderEmail = ref('')
const OrderNotes = ref('')
const isBtnCreateOrderActive = ref(true)
const isWindowThanksActive = ref(false)

const checkValueAddress = function (event) {
  event.target.value = event.target.value.replace(/[^a-z, 0-9A-Z]/g, '')
  OrderStreetAdress.value = event.target.value
}

const checkValuetNotes = function (event) {
  event.target.value = event.target.value.replace(/[^a-z, 0-9A-Z.!?]/g, '')
  OrderNotes.value = event.target.value
}
const checkValueFirstName = function (event) {
  event.target.value = event.target.value.replace(/[^a-z A-Z]/g, '')
  OrderFirstName.value = event.target.value
}

const checkValueLastName = function (event) {
  event.target.value = event.target.value.replace(/[^a-z A-Z]/g, '')
  OrderLastName.value = event.target.value
}
const checkValueCity = function (event) {
  event.target.value = event.target.value.replace(/[^a-z A-Z]/g, '')
  OrderCity.value = event.target.value
}

const checkValueCountry = function (event) {
  event.target.value = event.target.value.replace(/[^a-z A-Z]/g, '')
  OrderCountry.value = event.target.value
}

const checkValuePhoneNumber = function (event) {
  if (event.target.value[0] != '+') {
    event.target.value = '+' + event.target.value
  }
  event.target.value = event.target.value.replace(/[^0-9+]/g, '')
  OrderPhoneNumber.value = event.target.value
}
const checkValueEmail = function (event) {
  event.target.value = event.target.value.replace(/[^a-z@.0-9]/g, '')
  OrderEmail.value = event.target.value
}

const changeActivePayMethod1 = function (event) {
  activePayMethod.value = '1'
  howToPay.value = event.target.value
}
const changeActivePayMethod2 = function (event) {
  activePayMethod.value = '2'
  howToPay.value = event.target.value
}
const changeActivePayMethod3 = function (event) {
  activePayMethod.value = '3'
  howToPay.value = event.target.value
}

const sendAnOrder = async function () {
  try {
    if (cart.value) {
      isBtnCreateOrderActive.value = false
      const obj = {
        firstName: OrderFirstName.value,
        lastName: OrderLastName.value,
        country: OrderCountry.value,
        city: OrderCity.value,
        address: OrderStreetAdress.value,
        phoneNumber: OrderPhoneNumber.value,
        email: OrderEmail.value,
        notes: OrderNotes.value,
        paymentMethod: howToPay.value,
        cart: cart.value,
      }

      await axios.post('https://6acf7dc6ba5f73aa.mokky.dev/orders', obj)

      localStorage.setItem('GreenshopCart', JSON.stringify(''))
      isWindowThanksActive.value = true
    } else {
      throw err
    }
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="checkout">
    <Header :cart="cart"> </Header>
    <div class="h-200 px-8 cart py-8">
      <div class="mb-12">
        <RouterLink to="/shop"><span class="checkout-ref cursor-pointer">Shop</span></RouterLink>
        <span class="ml-1 mr-1">/</span>
        <RouterLink to="/cart">
          <span class="checkout-ref cursor-pointer">Shopping Cart</span></RouterLink
        >
        <span class="ml-1 mr-1">/</span>
        <span>Checkout</span>
      </div>
      <div class="checkout-grid">
        <div>
          <h1 class="check-paymethod mt-5">Billing Address</h1>
          <div class="checkout-input-grid mb-3">
            <div>
              <div><span>First Name</span> <span class="text-red-600">*</span></div>

              <input
                type="text"
                class="check-input"
                maxlength="25"
                id="name"
                pattern="[0-9]+"
                @input="checkValueFirstName"
              />
              <div><span>Country</span> <span class="text-red-600">*</span></div>
              <input
                type="text"
                name=""
                id=""
                class="check-input"
                maxlength="25"
                @input="checkValueCountry"
              />
              <div><span>Street Address</span> <span class="text-red-600">*</span></div>
              <input
                @input="checkValueAddress"
                type="text"
                class="check-input"
                maxlength="45"
                placeholder="House number and street name"
              />
              <div><span>Order notes (optional)</span></div>
              <textarea
                @input="checkValuetNotes"
                name=""
                id=""
                cols="30"
                rows="10"
                class="check-textarea"
                maxlength="500"
              ></textarea>
            </div>
            <div>
              <div>
                <div><span>Last Name</span> <span class="text-red-600">*</span></div>
                <input type="text" class="check-input" maxlength="25" @input="checkValueLastName" />
                <div><span>Town / City</span> <span class="text-red-600">*</span></div>
                <input
                  type="text"
                  name=""
                  id=""
                  class="check-input"
                  maxlength="25"
                  @input="checkValueCity"
                />
                <div><span>Phone Number</span> <span class="text-red-600">*</span></div>
                <input
                  type="text"
                  class="check-input"
                  maxlength="25"
                  @input="checkValuePhoneNumber"
                  step="0.01"
                />
                <div><span>Email address</span> <span class="text-red-600">*</span></div>
                <input type="text" class="check-input" maxlength="25" @input="checkValueEmail" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 class="check-paymethod mb-5 mt-5">Payment Method</h1>
          <label for="pay1">
            <div
              @click="changeActivePayMethod1"
              :class="{ checkoutPayOptionActive: activePayMethod === '1' }"
              class="flex justify-left items-center h-10 rounded-md mb-3 mt-3 checkout-payoption px-4"
            >
              <input type="radio" name="pay" id="pay1" value="By card" />
              <div>
                <img src="../assets/images/we-accept.png" alt="We-accept.jpg" class="ml-4" />
              </div></div
          ></label>
          <label for="pay2">
            <div
              @click="changeActivePayMethod2"
              :class="{ checkoutPayOptionActive: activePayMethod === '2' }"
              class="flex justify-left items-center h-10 rounded-md mb-3 mt-3 checkout-payoption px-4"
            >
              <input type="radio" name="pay" id="pay2" value="Direct transfer" />
              <p class="ml-4">Direct bank transfer</p>
            </div></label
          >
          <label for="pay3">
            <div
              @click="changeActivePayMethod3"
              :class="{ checkoutPayOptionActive: activePayMethod === '3' }"
              class="flex justify-left items-center h-10 rounded-md mb-3 mt-3 checkout-payoption px-4"
            >
              <input type="radio" name="pay" id="pay3" value="Cash on delivery" />
              <p class="ml-4">Cash on delivery</p>
            </div></label
          >
          <div class="flex justify-center items-center">
            <button
              @click="sendAnOrder"
              class="checkout-btn-place h-10 rounded-md"
              :class="{
                noClick:
                  !activePayMethod ||
                  !cart ||
                  !activePayMethod ||
                  !howToPay ||
                  !OrderFirstName ||
                  !OrderLastName ||
                  !OrderCountry ||
                  !OrderCity ||
                  !OrderStreetAdress ||
                  !OrderPhoneNumber ||
                  !OrderEmail ||
                  !isBtnCreateOrderActive,
              }"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isWindowThanksActive">
      <div class="fixed top-0 left-0 h-full w-full bg-black z-20 opacity-70"></div>
      <div class="fixed z-30 thanks-bg rounded-3xl py-12">
        <div class="grid justify-center items-center">
          <div class="flex justify-center w-full h-full">
            <img src="../assets/images/order-success-icon.png" alt="" />
          </div>
          <h1 class="flex justify-center thanks-h1 mt-5 mb-2">Thank you for your order!</h1>
          <p class="flex justify-center mb-4">
            Our manager will send you an e-mail within 2 days. Please, stay in touch
          </p>
          <div class="flex justify-center items-center">
            <RouterLink to="/">
              <button class="checkout-btn-to-home h-10 rounded-md flex justify-center items-center">
                <p>Back to Home</p>
                <div class="ml-1 w-4 h-6 flex justify-center items-center">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666656 4.81714C0.666656 4.56401 0.854759 4.35481 1.09881 4.3217L1.16666 4.31714L11.1667 4.31714C11.4428 4.31714 11.6667 4.541 11.6667 4.81714C11.6667 5.07027 11.4786 5.27947 11.2345 5.31257L11.1667 5.31714L1.16666 5.31714C0.890514 5.31714 0.666656 5.09328 0.666656 4.81714Z"
                    />
                    <path
                      d="M6.78066 1.15514C6.58498 0.960302 6.5843 0.64372 6.77914 0.448038C6.95627 0.270145 7.23401 0.25341 7.43006 0.398224L7.48624 0.446515L11.5196 4.46252C11.698 4.64017 11.7142 4.91891 11.5683 5.11496L11.5196 5.17111L7.48627 9.18778C7.29061 9.38264 6.97403 9.38198 6.77917 9.18632C6.60203 9.00844 6.58646 8.73063 6.7321 8.53519L6.78063 8.47921L10.458 4.81663L6.78066 1.15514Z"
                    />
                  </svg>
                </div></button
            ></RouterLink>
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
.checkout {
  color: $text-color;
}
.checkout-grid {
  display: grid;
  grid-template-columns: 60% 30%;
  justify-content: space-between;
}
.check-paymethod {
  padding-bottom: 12px;
  font-family: 'CeraPro-Bold', normal;
  font-size: 18px;
}
.checkout-payoption {
  border: 1px solid #dddddd;
  cursor: pointer;
  &:hover {
    border: 1px solid #eaeaea;
  }
}
.checkoutPayOptionActive {
  border: 1px solid $def-color;
  &:hover {
    border: 1px solid $def-color;
  }
}
.checkout-btn-place {
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

.checkout-btn-to-home {
  width: 250px;
  background-color: $def-color;
  color: white;
  stroke: white;
  font-family: 'CeraPro-Bold', normal;
  font-size: 15px;
  &:hover {
    background-color: $hover-color;
  }
  &:active {
    background-color: $click-color;
  }
}

.checkout-ref:hover {
  text-decoration: underline;
}
.checkout-input-grid {
  display: grid;
  grid-template-columns: 43% 43%;
  justify-content: space-between;
  margin-top: 15px;
}
.checkout-h2 {
  font-family: 'CeraPro-Medium', normal;
  font-size: 16px;
}
.check-input {
  border: 1px solid #dddddd;
  width: 100%;
  border-radius: 4px;
  height: 40px;
  margin-bottom: 32px;
  margin-top: 10px;
  padding: 0px 8px;
}
.check-textarea {
  border: 1px solid #dddddd;
  width: 100%;
  border-radius: 4px;
  height: 200px;
  margin-bottom: 32px;
  margin-top: 10px;
  padding: 0px 8px;
  resize: none;
}
input[type='radio'] {
  accent-color: $def-color;
}
.noClick {
  pointer-events: none;
  cursor: default;
  opacity: 0.5;
}
.thanks-bg {
  height: 500px;
  width: 700px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  top: 50%;
  background-color: rgb(255, 255, 255);
}
.thanks-h1 {
  font-family: 'CeraPro-Bold', normal;
  font-size: 30px;
  color: $text-color;
}
</style>
