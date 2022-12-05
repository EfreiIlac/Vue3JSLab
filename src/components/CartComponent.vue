<template>
  <button @click="() => toggleCart()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path
        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
      />
    </svg>
    <div class="cart-content" :class="visible ? 'visible' : ''">
      <div class="item" v-for="(item, idx) in cart" :key="idx">
        <img class="item-image" :src="item.image" :alt="item.name" />
        <h3 class="item-name">{{ item.name }}</h3>
        <p class="item.price">€ {{ item.price }} x {{item.quantity}} : €{{(item.price*item.quantity)}}</p>
      </div>
      <div class="total">
        <p>Total: € {{total}}</p>
      </div>
      <router-link to="/pay"><button class="pay">Pay now</button></router-link>
    </div>
  </button>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const cart = ref(store.state.cart)
const total = ref(store.getters.cartTotal)

watch(store.state.cart, (newCart) => {
  cart.value = newCart
  total.value = store.getters.cartTotal
})

const visible = ref(false);

const toggleCart = () => {
  visible.value = !visible.value;
};
</script>

<style scoped>
button {
  all: unset;
  cursor: pointer;
  position: relative;
}

.cart-content {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  top: 30px;
  right: 0;
  width: 300px;
  max-height: 0px;
  box-sizing: border-box;
  background-color: rgb(214, 245, 234);
  border-radius: 8px;
  color: #000;
  transition: max-height 0.3s ease-in-out;
}

.visible {
  padding: 1rem;
  max-height: 90vh;
  height: max-content;
  overflow-y: scroll;
  border: 4px solid #32cd94;
}

.visible::-webkit-scrollbar {
    padding-top: 4px;
    background-color: hsl(158, 61%, 90%);
    border-radius: 8px;
    width: 10px;
  }

  .visible::-webkit-scrollbar-thumb {
    background-color: hsl(158, 61%, 70%);
    border-radius: 8px;
  }


svg {
  width: 20px;
  aspect-ratio: 1;
  fill: #a9ead2;
}
svg:hover {
  fill: #32cd94;
}

  .item-image {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 8px;
  }

  .item-name {
    color: black;
    margin: 0;
  }

  .item-price {
    margin: 0;
    color: black;
  }

  .pay {
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    background-color: #32cd94;
    color : #ebfaf4;
    box-sizing: border-box;
    border: 2px solid #32cd94;
    border: 0;
  }
  
  .pay:hover {
    border: 2px solid #32cd94;
    color: #32cd94;
    background-color: #ebfaf4;
  }
</style>

