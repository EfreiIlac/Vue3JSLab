<template>
  <div class="container">
    <header>
      <router-link to="/">
        <h1>Sneack'Lot</h1>
      </router-link>
      <nav>
        <router-link to="/"><a>home</a></router-link>
        <router-link to="about"><a>about us</a></router-link>
        <router-link to="contact"><a>contact us</a></router-link>
        <CartComponent/>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
  import CartComponent from './components/CartComponent.vue';
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
    height: max-content;
    background-color: #082118;
  }

  router-link {
    color: #fff;
    text-decoration: none;
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

