<template>
    <div> 
        <a class = "photoButton">
            <img class = "photo" :src = "getImgUrl(props.meme.file)" :alt = "props.meme.name"/>
        </a>
    </div> 
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    meme: Object
})

function getImgUrl(file) {
    return "https://storage.googleapis.com/memebuild/uploads/" + file + ".jpg"
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