<script setup>
import { image } from "../../stores/image"
import SkeletonImage from "./SkeletonImage.vue"

function getImage() {
    if (image.value.url)
        return image.value.url;
}

</script>

<template> 
       <SkeletonImage 
        v-if="!image.url"/>
        <img
        v-else
        class = "selected-photo" 
        :src = "getImage()" 
        alt = "meme" /><br><br>
</template>

<style lang="scss" scoped>
.selected-photo {
    display: grid;
    margin: 0 auto;
    border-radius: 10px;
    max-width: 50%;
    max-height: 50%;
    margin-bottom: 16px;
}
</style>
