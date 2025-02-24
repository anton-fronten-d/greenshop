import './assets/main.css'
import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Shop from './pages/Shop.vue'
import Blogs from './pages/Blogs.vue'
import Favourites from './pages/Favourites.vue'
import Cart from './pages/Cart.vue'
import Checkout from './pages/Checkout.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/blogs', name: 'Blogs', component: Blogs },
  { path: '/favourites', name: 'Favourites', component: Favourites },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/checkout', name: 'Checkout', component: Checkout },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')

app
