<template>
  <header class = "header">
      <div class="container">
        <h1 class="primary-title">Amazing Meme Builder</h1><br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in molestie diam. Etiam interdum ornare tincidunt. Aenean eu suscipit dui. Vestibulum consectetur id orci non placerat. Nullam fringilla massa lectus, non tempus elit interdum nec. Nam quis maximus diam. Etiam volutpat ullamcorper enim sit amet sollicitudin.</p><br>
        <a href ="/gallery-generator" class = "btn"> Try it out </a>
      </div>    
  </header>
  <main>
      <section class = "featured">
          <div class = "container">
            <h2 class = "section-title"> How you can build your own meme? </h2><br>
            <div class ="split">
                <a href="#" class="featured_item">
                  <img :src=DefaultImage alt ="" class ="featured_img" />
                  <p class = "featured_details"> Before </p>
                </a>
                <a href="#" class="featured_item">
                  <img :src=MemeImage alt ="" class ="featured_img" />
                  <p class = "featured_details">After</p>
                </a>
            </div>
          </div>
      </section>
  </main>
</template>

<script setup>
import DefaultImage from "../assets/squid-games.jpg";
import MemeImage from "../assets/squid-game-meme.jpg";
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  display: block;
  border-radius: 10px;
}
h1,
h2,
h3,
p {
  margin: 0;
}
section {
  padding: 7em 0;
}

.container {
  width: 85%;
  max-width: 65em;
  margin: 0 auto;
}
.split {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    flex-basis: 30%;
    min-width: 15em;
  }
}

.btn {
  display: inline-block;
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: .9rem;
  padding: .5em 1.25em;
  background: #53BF9D;
  border-radius: .25em;
  transition: 
    transform 250ms ease-in-out,
    opacity 250ms linear;

}
.btn:hover,
.btn:focus {
  transform: scale(1.1);
  opacity: .9;
}
.primary-title {
  font-size: clamp(3rem, calc(5vw + 1rem), 4.5rem);
  line-height: 1;
}
.header {
  color: white;
  text-align: center;
  padding: 15em 0;
  background-color: #222;
}
.section-title {
  color: white;
  text-align: center;
  font-size: clamp(3rem, calc(5vw + 1rem), 4.5rem);
  line-height: 1;
}
.featured {
  background: #53BF9D; 
  &_item {
    display: block;
    position: relative;
    transform: scale(.85);
    transition: transform 250ms ease-in-out;
    text-align: center;
    font-size: 2rem;
    text-decoration: none;
    color: white;
  }
  &_details {
    font-size: 2rem;
  }
  &_item:hover,
  &_item:focus {
    transform: scale(1);
  }
}
</style>