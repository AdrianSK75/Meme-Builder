<script setup>
import BackgroundImages from "./BackgroundImages.vue"
import GeneratedImages from "./GeneratedImages.vue"
import { ref } from 'vue'

const swipe = ref(false)

</script>

// Gallery Swiper
<template>
    <hr>
    <br>
    <div class="buttons-grid">
        <button @click = "swipe = false"> Background Images </button>
        <button @click = "swipe = true"> Generated Images </button>
    </div>

    <div class = "image-grid" v-if="!swipe">
            <BackgroundImages />
    </div>

    <div class = "image-grid" v-if="swipe">
            <GeneratedImages />
    </div>

</template>

<style lang="scss" scoped>
.buttons-grid {
    text-align: center;
    display: block;
}
.image-grid {
    display: block;
    padding: 16px;
    
    @media (min-width: 768px) {
        display: grid;
        
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 300px;
    }
    @media (min-width: 960px) {
        display: grid;
        
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 300px;
    }
    @media (min-width: 1200px) {
        display: grid;
        
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 300px;
    }
    grid-gap: 16px;
}
</style>