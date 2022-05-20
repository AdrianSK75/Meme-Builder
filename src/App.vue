<script setup>
import ImageGrid from '../src/components/Main/ImageGrid'
import TopGrid from '../src/components/Header/TopGrid.vue'
</script>

<template> 
        <div class = "main">
            <TopGrid />   
            <ImageGrid />
        </div>
</template>

<style lang = "scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
#app {
  font-family: montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #9772FB;
  margin-top: 20px;
}
</style>
