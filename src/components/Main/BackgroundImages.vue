<script>
import BackgroundImage from "./BackgroundImage.vue"
import { ref } from "vue"
import axios from "axios"

export default {
        components: {
            BackgroundImage,
        },
        async setup() {
                const backgroundImages = ref([]);

                try {
                    const res = await axios("https://memebuild.com/api/getDefaultMemes");
                    backgroundImages.value = res.data
                    console.log(res);
                } catch (e) {
                    console.log(e);
                }

                return {
                    backgroundImages,
                }
        }
        
}
</script>

<template >    
        <BackgroundImage
            v-for= "meme of backgroundImages"
            :meme = "meme"
            :key = "meme.id"
        />
</template>

