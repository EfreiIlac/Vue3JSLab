<template>
  <div>
    <section>
      <h2 class="about">About Us</h2>

      <div>
        <p class="p1">Sneakers designate a pair of sports shoes diverted for city and everyday use. Derived from models
          designed
          for sport, they are appreciated for their comfort and style. In fact, sneakers are also fashion accessories
          that were used in the world of hip-hop in the 1970s and 1980s before becoming streetwear brands in the 2000s
          that spread into popular culture. In many countries, especially in the West, these shoes are widely worn in
          the street. Teenagers are the main
          wearers of the sneaker as an everyday shoe, with the encouragement of the advertising campaigns of major
          specialized brands, but other generations wear them willingly. For urban use, multi-sport shoes, or reissued
          1960s–1970s models are the most popular</p>

        <p class="p2">
          We are a group of 3 student from EFREI Paris, we all are bigs fan of sneakers that why we decided to creat a
          website how can reunited all the sneakers fans !
        </p>

      </div>

      <div class="creators-container">
        <div class="creator-box">
          <img src="../assets/images/pm.jpeg" alt="">
          <p>Pierre-Marie</p>
        </div>
        <div class="creator-box">
          <img src="../assets/images/anas.PNG" alt="">
          <p>Anas</p>
        </div>
        <div class="creator-box">
          <img src="../assets/images/augustin.jpg" alt="">
          <p>Augustin</p>
        </div>
      </div>


    </section>
  </div>
</template>

<script setup>

</script>

<style scoped>
.about {
  text-align: center;
}

.p1 {
  width: 70%;
  background-color: #D6F5EA;
  color: black;
  border-radius: 8px;
  padding: 1rem;
  display: block;
  margin: 0 auto;
}

.p2 {
  width: 70%;
  background-color: #D6F5EA;
  color: black;
  border-radius: 8px;
  padding: 20px;
  display: block;
  margin: 40px auto;
}

.creators-container {
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  margin: 100px auto;
}

.creator-box {
  background-color: #D6F5EA;
  color: black;
  padding: 1rem;
  width: 150px;
  border-radius: 8px;
  text-align: center;
}

.creator-box img {
  margin-top: -75px;
  width: 150px;
  height: 150px;
  border-radius: 9999999px;
  object-fit: cover;

}
</style>