<template>
  <div class="container">
    <header>
      <h1>Sneack'Lot</h1>
      <nav>
        <a href="#">about us</a>
        <a href="#">contact us</a>
        <CartComponent :items="cart"/>
      </nav>
    </header>
    <main>
      <section>
        <h2>Our Sneakers</h2>
        <div class="sneakers-container">
          <SneackersCard v-for="(sneaker,idx) in sneakers" :key="idx" :image="sneaker.image" :name="sneaker.name" :price="sneaker.price" @add-to-cart="addToCart(sneaker)"/>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SneackersCard from './components/SneackersCard.vue';
import CartComponent from './components/CartComponent.vue';

  const cart = ref([]);

  const sneakers = [
    {
      name: 'Nike Air Max 90',
      price: 120,
      image: 'https://static.nike.com/a/images/t_default/e664c964-12c1-4adf-be66-995469ec2f21/air-max-90-shoes-NxmTS8.png'
    },
    {
      name: 'Nike Dunk Low Panda',
      price: 150,
      image: 'https://statics.whentocop.fr/nike_dunk_low_wmns_black_white_dd1391_100_239e178d52.png'
    },
    {
      name: 'Nike Air Force 1 Easter 2018',
      price: 130,
      image: 'https://image.goat.com/transform/v1/attachments/product_template_pictures/images/010/555/244/original/AH8462_400.png.png?action=crop&width=750'
    },
    {
      name: 'Nike Air Max 97 Sean Wotherspoon',
      price: 200,
      image: 'http://cdn.shopify.com/s/files/1/0020/8155/4531/products/AJ4219-400_53ff5346-4389-43e8-985d-6a0bfaea12c8.png?v=1662359897'
    },
    {
      name: 'Nike Jordan Chicago',
      price: 180,
      image: 'https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-1-mid-chicago-white-600060.png?v=1638812808'
    },
    {
      name: 'Jordan 4 Retro Kaws',
      price: 200,
      image: 'http://cdn.shopify.com/s/files/1/0538/9785/5174/products/air-jordan-4-retro-kaws-grey-graal-spotter-1.png?v=1625729317'
    }
  ]

  const addToCart = (sneaker) => {
    // if sneaker is already in cart, increase quantity
    const existingSneaker = cart.value.find(s => s.name === sneaker.name);
    if (existingSneaker) {
      existingSneaker.quantity++;
    } else {
      cart.value.push({
        ...sneaker,
        quantity: 1
      });
    }
  }

</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #082118;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    height: 6vh;
    background-color: #0a291e;
    color: #a9ead2;
  }

  header h1 {
    font-size: 20px;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  nav a {
    text-decoration: none;
    color: unset;
  }

  nav a:hover {
    color: #32cd94;
  }

  main {
    padding: 1rem;
  }
  .sneakers-container {
    display: flex;
    flex-wrap: no-wrap;
    gap: 1rem;
    width: 100%;
    overflow-x: scroll;
    padding-bottom: 8px;
  }

  .sneakers-container::-webkit-scrollbar {
    padding-top: 4px;
    background-color: hsl(158, 61%, 90%);
    border-radius: 8px;
    height: 10px;
  }

  .sneakers-container::-webkit-scrollbar-thumb {
    background-color: hsl(158, 61%, 70%);
    border-radius: 8px;
  }
</style>

