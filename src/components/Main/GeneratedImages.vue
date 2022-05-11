<script setup>
import { ref, onMounted } from "vue"
import { image } from "../../stores/image"
import { API_KEY } from "../../stores/image"
import axios from "axios"

const generatedImages = ref([]);

onMounted(async () => {
        try {
            const res = await axios(`https://memebuild.com/api/1.0/myRecentMemes?api-key=${API_KEY}`);
            generatedImages.value = res.data
            console.log(res);
        } catch (e) {
            console.log(e);
        }
})
function getImgUrl(file) {
    return "https://storage.googleapis.com/memebuild/uploads/" + file + ".jpg"
}

</script>

<template v-if = "generatedImages">
                <div v-for = "meme of generatedImages" :key = "meme.id">
                      <a class = "photoButton" 
                      @click = "image.dowloandImage(meme.file)">
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
    
    max-width: 81%;
    max-height: 60%;
    margin-bottom: 16px;
}
.photoButton {
    display: block;
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
}
</style>