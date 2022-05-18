<script setup>
import { ref, onMounted } from "vue"
import { API_KEY } from "../../stores/image"
import ShareModal from "../Modals/ShareModal.vue"
import axios from "axios"

const generatedImages = ref([]);
const showModal = ref(false);

onMounted(async () => {
        try {
            const res = await axios(`https://memebuild.com/api/1.0/myRecentMemes?api-key=${API_KEY}&limit=100`);
            generatedImages.value = res.data.reverse();
            console.log(res);
        } catch (e) {
            console.log(e);
        }
})

function getImgUrl(file) {
    return "https://storage.googleapis.com/memebuild/uploads/" + file + ".jpg"
}

</script>

<template>
        <div v-for = "meme of generatedImages" :key = "meme.id">
                <a class = "photoButton" 
                @click = "showModal = true">
                <img 
                class = "photo"
                :src = "getImgUrl(meme.file)" 
                :alt = "meme.name"
                />
                </a>   
        </div>

        <Teleport to="body">
            <ShareModal 
            :show="showModal" 
            @close="showModal = false"
            ></ShareModal>
        </Teleport>
</template>

<style lang="scss" scoped>
.photo {
    display: block;
    margin: 0 auto;
    
    max-width: 90%;
    max-height: 60%;
    margin-bottom: 16px;
}
.photoButton {
    display: block;
    cursor: pointer;
}
</style>