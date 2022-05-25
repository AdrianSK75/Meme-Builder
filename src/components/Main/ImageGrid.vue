// Gallery Swiper
<template>  
    <SwiperButtons 
    @swipeGallery = "(value) => swipe = value"
    />
    <div class = "image-grid" v-if="!swipe">
            <Suspense>
                <template #default> 
                    <BackgroundImages />
                </template>
                <template #fallback> 
                    <SkeletonImage 
                    v-for = "index in 30"
                    :key = "index"
                    />
                </template>
            </Suspense>
    </div>
    <div class = "image-grid" v-if="swipe">
            <Suspense>
                <template #default> 
                    <GeneratedImages />
                </template>
                <template #fallback>
                    <SkeletonImage 
                    v-for = "index in 30"
                    :key = "index"
                    />
                </template>
            </Suspense>
    </div>
</template>

<script setup>
import BackgroundImages from "./BackgroundImages.vue"
import GeneratedImages from "./GeneratedImages.vue"
import SwiperButtons from "./SwiperButtons.vue"
import SkeletonImage from "./SkeletonImage.vue"
import { ref } from 'vue'

const swipe = ref(false)
</script>

<style lang="scss" scoped>
.image-grid {
    display: grid;
    padding: 16px;
    background-color: #85F4FF;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 400px;
    }
    @media (min-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 400px;
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 400px;
    }
    @media (min-width: 1900px) {
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: 500px;
    }
    grid-gap: 16px;
}
</style>