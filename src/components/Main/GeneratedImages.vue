<script >
import { ref } from "vue"
import { API_KEY } from "../../stores/image"
import GeneratedImage from "./GeneratedImage.vue"
import axios from "axios"

export default {
    components: {
        GeneratedImage
    },
    async setup() {
        const generatedImages = ref([]);

        try {
            const res = await axios(`https://memebuild.com/api/1.0/myRecentMemes?api-key=${API_KEY}&limit=100`);
            generatedImages.value = res.data.reverse();
            console.log(res);
        } catch (e) {
            console.log(e);
        }

        return {
            generatedImages,
        }
    }
}
</script>

<template>
        <GeneratedImage
            v-for= "meme of generatedImages"
            :meme = "meme"
            :key = "meme.id"
        />
</template>
