<script setup>
import { ref, onMounted } from "vue"
import { postMeme } from "../../stores/image"
import axios from "axios"

const backgroundImages = ref([]);

onMounted(async () => {
        try {
            const res = await axios("https://memebuild.com/api/getDefaultMemes");
            backgroundImages.value = res.data
            console.log(res);
        } catch (e) {
            console.log(e);
        }
})
function getImgUrl(file) {
    return "https://storage.googleapis.com/memebuild/default/" + file + ".jpg"
}
</script>

<template >
        <div v-for = "meme of backgroundImages" :key = "meme.id">
                <a class = "photoButton" 
                @click = "postMeme(meme.file)">
                    <img 
                    class = "photo"
                    :src = "getImgUrl(meme.file)" 
                    :alt = "meme.name"
                    />
                </a>   
        </div>
</template>

<style lang="scss" scoped>
.photo {
    display: block;
    margin: 0 auto;
    
    max-width: 90%;
    max-height: 90%;
    margin-bottom: 16px;
}
.photoButton {
    display: block;
    cursor: pointer;
}
</style>