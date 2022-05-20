<template>
    <a class = "photoButton" @click = "setImageLocation(props.meme.file)">
        <img class = "photo" :src = "getImgUrl(props.meme.file)" :alt = "props.meme.name"/>
    </a>
</template>

<script setup>
import { defineProps } from "vue";
import { image } from "../../stores/image"

const props = defineProps({
    meme: Object
})

function setImageLocation(imageName) {
    const imageUrl = getImgUrl(imageName);
    console.log(imageUrl, "\n", imageName)
    image.value.setImageUrl(imageUrl)
    image.value.setImageName(imageName)
    console.log(image.value.getImageUrl())
}

function getImgUrl(imageName) {
    return "https://storage.googleapis.com/memebuild/default/" + imageName + ".jpg"
}
</script>

<style lang="scss" scoped>
.photo {
    display: block;
    margin: 0 auto;
    border-radius: 10px;
    max-width: 90%;
    max-height: 90%;
    margin-bottom: 16px;
}
.photoButton {
    display: block;
    cursor: pointer;
}
</style>