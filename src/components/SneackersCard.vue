<template>
  <div class="sneak-box">
    <img :src="props.image" :alt="`${props.name}'s image'`">
    <h2>{{props.name}}</h2>
    <div class="actions-container">
      <p>€ {{props.price}}</p>
      <button @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script setup>
  const emmiter = defineEmits(
    'add-to-cart'
  );

  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  });

  const addToCart = () => {
    emmiter('add-to-cart');
  }
</script>

<style scoped>
  .sneak-box {
    background-color: #D6F5EA;
    min-width: 256px;
    max-width: 256px;
    aspect-ratio: 1;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
  }
  
  .sneak-box img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    border-radius: 8px;
  }
  
  h2 {
    color: black;
    text-align: center;
    font-size: 18px;
  }

  .actions-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
  }

  button {
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    background-color: #32cd94;
    color : #ebfaf4;
    box-sizing: border-box;
    border: 2px solid #32cd94;
    border: 0;
  }
  
  button:hover {
    border: 2px solid #32cd94;
    color: #32cd94;
    background-color: #ebfaf4;
  }


</style>

