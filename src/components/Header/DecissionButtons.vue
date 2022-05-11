<script setup>
import { image, postMeme } from "../../stores/image"
</script>

<template>
   <button 
    class="btn btn-primary"
    @click = "postMeme(image.file)"> Generate </button>
                
    <button
    class="btn btn-primary"
    @click = "image.deleteImage()"> Delete </button><br>
</template>

