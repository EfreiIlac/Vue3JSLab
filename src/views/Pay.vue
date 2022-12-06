<template>
  <div class="paiement-container">
    <div class="order-resume">
      <h1>Resume of the order</h1>
      <div class="item-ordered" v-for="(item, idx) in cart" :key="idx">
        <img class="item-image" :src="item.image" :alt="item.name" />
        <h3 class="item-name">{{ item.name }}</h3>
        <p class="item.price">
          € {{ item.price }} x {{ item.quantity }} : €{{
            item.price * item.quantity
          }}
        </p>
      </div>
      <div class="total">
        <p>Total: € {{ total }}</p>
      </div>
    </div>
    <div class="paiement">
      <h1>Payment</h1>
      <div class="paiement-form">
        <form>
          <div class="paiement-form-input">
            <label for="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div class="paiement-form-input">
            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div class="paiement-form-input">
            <label for="address">Address</label>
            <input type="text" id="address" />
          </div>
          <div class="paiement-block">
            <div class="paiement-form-input">
              <label for="city">City</label>
              <input type="text" id="city" />
            </div>
            <div class="paiement-form-input">
              <label for="zip">Zip</label>
              <input type="text" id="zip" />
            </div>
            <div class="paiement-form-input">
              <label for="country">Country</label>
              <input type="text" id="country" />
            </div>
          </div>
          <h2>Payment Informations</h2>
          <div class="paiement-block">
            <div class="paiement-form-input">
              <label for="card">Card Number</label>
              <input type="text" id="card" />
            </div>
            <div class="paiement-form-input">
              <label for="date">Date</label>
              <input type="text" id="date" />
            </div>
            <div class="paiement-form-input">
              <label for="cvv">CVV</label>
              <input type="text" id="cvv" />
            </div>
          </div>
        </form>
      </div>
      <button class="button">Pay now</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const cart = ref(store.state.cart);
const total = ref(store.getters.cartTotal);

watch(store.state.cart, (newCart) => {
  cart.value = newCart;
  total.value = store.getters.cartTotal;
});
</script>

<style scoped>
.paiement-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
}
.paiement {
  width: 50%;
  height: 80%;
  border-radius: 10px;
  padding: 1rem;
}

.order-resume {
  width: 50%;
  height: 80%;
  border-radius: 10px;
  padding: 1rem;
  color: #000;
}

.item-ordered {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #d6f5ea;
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.item-name {
  color: #000;
}

.item-price {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.total {
  color: #32cd94;
  font-size: 1.5rem;
}

.paiement h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}
.paiement-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.paiement-block {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.paiement-form-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}
.paiement-form-input label {
  font-size: 1.2rem;
  color: #32cd94;
}
.paiement-form-input input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgb(214, 245, 234);
}

.paiement-form-input input:focus {
  outline: none;
  border: 1px solid #32cd94;
}

.paiement-form-input input::placeholder {
  color: #ccc;
}

.button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
}
</style>

