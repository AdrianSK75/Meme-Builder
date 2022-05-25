<template>
   <button 
    class="decission-button"
    @click = "postMeme(image.name)"> Generate </button>           
    <button
    class="decission-button"
    @click = "image.setLogo()"> Delete </button><br><br>
</template>

<script setup>
import { image, postMeme } from "../../composable/useMeme"
</script>

<style lang="scss" scoped>
.decission-button {
    padding: 0px 3px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 450;
    margin: 0 10px;
}
</style>

