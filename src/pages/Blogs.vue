<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'
const activeClassHeader = ref('blogs')
const cart = ref(JSON.parse(localStorage.getItem('GreenshopCart')))
</script>

<template>
  <div>
    <Header :activeClassHeader="activeClassHeader" :cart="cart"> </Header>
    <div class="px-20 mt-10 mb-25">
      <div class="flex justify-center">
        <h1>Our Blog Posts</h1>
      </div>
      <div class="flex justify-center">
        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>
      <div class="grid-container mt-8 justify-between">
        <div>
          <div class="mb-2"><img src="../assets/images/blog-img1.png" alt="Plant.jpg" /></div>
          <div class="px-2">
            <p class="blog-date mb-2">September 12 I Read in 6 minutes</p>
            <h3 class="blog-name mb-2 w-48">Cactus & Succulent Care Tips</h3>
            <p class="blog-descr mb-2 w-60">
              Cacti are succulents are easy care plants for any home or patio.
            </p>
            <a disabled href="#"
              ><div class="flex svg-container">
                <p>Read More</p>
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
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="mb-2"><img src="../assets/images/blog-img2.png" alt="Plant.jpg" /></div>
          <div class="px-2">
            <p class="blog-date mb-2">September 13 I Read in 2 minutes</p>
            <h3 class="blog-name mb-2 w-48">Top 10 Succulents for Your Home</h3>
            <p class="blog-descr mb-2 w-60">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <a disabled href="#"
              ><div class="flex svg-container">
                <p>Read More</p>
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
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="mb-2"><img src="../assets/images/blog-img3.png" alt="Plant.jpg" /></div>
          <div class="px-2">
            <p class="blog-date mb-2">September 15 I Read in 3 minutes</p>
            <h3 class="blog-name mb-2 w-48">Cacti & Succulent Care Tips</h3>
            <p class="blog-descr mb-2 w-60">
              Cacti and succulents thrive in containers and because most are...
            </p>
            <a disabled href="#"
              ><div class="flex svg-container">
                <p>Read More</p>
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
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div class="mb-2"><img src="../assets/images/blog-img4.png" alt="Plant.jpg" /></div>
          <div class="px-2">
            <p class="blog-date mb-2">September 15 I Read in 2 minutes</p>
            <h3 class="blog-name mb-2 w-48">Best Houseplants Room by Room</h3>
            <p class="blog-descr mb-2 w-60">
              The benefits of houseplants are endless. In addition to...
            </p>
            <a disabled href="#"
              ><div class="flex svg-container">
                <p>Read More</p>
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
                </div>
              </div>
            </a>
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

h1 {
  font-family: 'CeraPro-Bold', normal;
  font-size: 30px;
  color: $text-color;
}
.blog-descr {
  color: $descr-color;
  font-size: 14px;
}
.grid-container {
  display: grid;
  grid-template-columns: 22% 22% 22% 22%;
}
.blog-date {
  font-family: 'CeraPro-Medium', normal;
  font-size: 14px;
  color: $def-color;
}
.blog-name {
  font-family: 'CeraPro-Bold', normal;
  font-size: 20px;
  line-height: 26px;
  color: $text-color;
}
.svg-container {
  color: $text-color;
  stroke: $text-color;
  fill: $text-color;
  font-family: 'CeraPro-Medium', normal;
  &:hover {
    text-decoration: underline;
    color: $def-color;
    stroke: $def-color;
    fill: $def-color;
  }
}
</style>
