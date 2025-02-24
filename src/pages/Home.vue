<script setup>
import Header from '../components/Header.vue'
import SliderHome from '../components/SliderHome.vue'
import Advertisements from '../components/Advertisements.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'
const activeClassHeader = ref('home')
const cart = JSON.parse(localStorage.getItem('GreenshopCart'))
</script>

<template>
  <div>
    <Header :activeClassHeader="activeClassHeader" :cart="cart"> </Header>
    <SliderHome />
    <Advertisements />
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts.scss';
@import '../assets/variables.scss';
</style>
