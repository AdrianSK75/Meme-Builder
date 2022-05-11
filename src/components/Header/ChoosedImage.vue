<script setup>
import { image } from "../../stores/image"

function getGeneratedImage() {
    return image.value.url;
}
</script>

<template>
    <img class = "selected-photo" 
    :src = "getGeneratedImage()" 
    alt = "meme" />
</template>

<style lang="scss" scoped>
.selected-photo {
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 16px;

    width: 20%;
    min-width: 20%;
    @media (min-width: 768px) {
        flex: 1 1 15%;
        margin: 0px 8px 16px;
        max-width: calc(50% - 16px);
    }
}
</style>
