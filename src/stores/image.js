import { ref } from 'vue'
import axios from 'axios'
import VueLogo from "./logo.png"

export const API_KEY = "d8d56d43357a52a6d9c46890f26c63"

export const image = ref({
    file: "",
    url: VueLogo,
    setImage(value) {
        this.file = value
    },
    setUrl(url) {
        this.url = url
    },
    getBackgroundImage() {
        return "https://storage.googleapis.com/memebuild/default/" + this.file + ".jpg"
    },
    getGeneratedImage() {
        return this.url;
    },
    deleteImage() {
        this.url = VueLogo
    }

})

export const text = ref({
    top: "TOP",
    bottom: "BOTTOM",
    setTopText(text) {
        this.top = text;
    },
    setBottomText(text) {
        this.bottom = text;
    },
    getTopText() {
        return this.top;
    },
    getBottomText() {
        return this.bottom;
    }


})

export function postMeme(filename) {
        image.value.deleteImage();
        image.value.setImage(filename);
        //console.log(image.value.getBackgroundImage())
        const meme = new FormData();

        meme.append("topText", text.value.getTopText());
        meme.append("bottomText", text.value.getBottomText());
        meme.append("imgUrl", image.value.getBackgroundImage());

        
        axios.post(`https://memebuild.com/api/1.0/generateMeme?api-key=${API_KEY}`, meme)
        .then((response) => {
                console.log(response);
                
                image.value.setUrl(response.data.url)
                console.log(image.value.getGeneratedImage())
        })
        .catch(function (error) {
                console.log(error);
        })
}

// Reusable GET requests - Bug fixing -> receive a HTML data, no a JSON
// async function getImages(request) {
//     let images = new Array();
//     try {
//         const res = await axios(`https://memebuild.com/api/${request}`);
//         images = res.data
//         console.log(res);
//     } catch (e) {
//         console.log(e);
//     }
//     return images
// }

// export const typeOfImages = ref({
//     background: getImages("generatedMemes"),
//     generated: getImages(`1.0/myRecentMemes?api-key=${API_KEY}&limit=100`)
// })



