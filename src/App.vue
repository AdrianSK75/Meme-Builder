<script>
import axios from 'axios'

export default {
        data() {
            return {
                api_key: "9b418cfa3343d661223bcf1fe61a4b",
                pictureUrl: "",
                actualPicture: "",
                topText: "TOP",
                bottomText: "BOTTOM",
                memes: [],
            };
        },

        async created() {
            try {
                const res = await axios("https://memebuild.com/api/getDefaultMemes");
                this.memes = res.data;
                console.log(res);
            } catch (e) {
                console.log(e);
            } 
        },

        methods: {
            getImgUrl(pic) {
              return "https://storage.googleapis.com/memebuild/default/" + pic + ".jpg"
            },

            getPicture() {
                return this.pictureUrl;
            },

            deletePicture() {
                this.pictureUrl = "";
                this.actualPicture = ""
            },

            postMeme(file, topText, bottomText) {
                  //console.log(file, topText, bottomText);
                this.actualPicture = file;
                
                const data = new FormData();
                data.append("topText", topText)
                data.append("bottomText", bottomText)
                data.append("imgUrl", "https://storage.googleapis.com/memebuild/default/" + file + ".jpg")
                 
                axios.post(`https://memebuild.com/api/1.0/generateMeme?api-key=${this.api_key}`, data)
                .then((response) => {
                        console.log(response);
                        
                        this.pictureUrl = response.data.url;
                        console.log(this.pictureUrl)
                })
                .catch(function (error) {
                        console.log(error);
                })
        },
        }
    }
</script>

<template> 
        <div class = "top-grid">
                <h1>Meme Builder</h1>
                <input type = "text" v-model = "topText"><br>
                <input type = "text" v-model = "bottomText"><br><br>
                <button @click = "postMeme(actualPicture, topText, bottomText)"> Generate </button>
                <button @click = "deletePicture()"> Delete </button><br>
                <p v-if = "!pictureUrl"> No image selected </p>
        </div>
        <br>

        <div v-if = "pictureUrl"> 
                <img class = "selectedPhoto" :src = "getPicture()" alt = "meme" />
        </div>
        <br>

        <div class = "image-grid" v-if = "!pictureUrl">
                <div v-for = "meme of memes" :key = "meme.id">
                      <button class = "photoButton" 
                      @click = "postMeme(meme.file, topText, bottomText)">GET {{ meme.name }}</button>
                      <img 
                        class = "photo"
                        :src = "getImgUrl(meme.file)" 
                        :alt = "meme.name"
                      />
                </div>
        </div>
</template>

<style lang = "scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.top-grid {
    text-align: center;
}
.image-grid {
    display: block;
    padding: 16px;
    
    @media (min-width: 768px) {
        display: grid;
        
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 300px;
    }
    @media (min-width: 960px) {
        display: grid;
        
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 300px;
    }
    @media (min-width: 1200px) {
        display: grid;
        
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 300px;
    }
    grid-gap: 16px;
}
.selectedPhoto {
    text-align: center;
    display: block;
    padding: 16px;
    margin-left: auto;
    margin-right: auto;

    max-width: 81%;
    max-height: 60%;
}
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

/* <div v-if = "!api_key" class = "top-grid">
        <p> You don't have the API key generated. Create an account on MemeBuild and replace bellow the key </p><br>
        <input v-model = "api_key"/>
</div> 
Here I wanted to create a model where , when I'm adding the api key to input, the pictures will be pushed on the page and also to create requests to the REST API
*/