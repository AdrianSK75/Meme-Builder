import { ref } from 'vue'
import axios from 'axios'
import VueLogo from "./logo.png"

export const API_KEY = "f5f983230ccd289c313849871a9c42"

export const image = ref({
    name: "",
    url: VueLogo,
    setImageName(value) {
        this.name = value
    },
    setImageUrl(url) {
        this.url = url
    },
    getImageName() {
        return this.name
    },
    getImageUrl() {
        return this.url
    },
    setLogo() {
        this.url = VueLogo;
    },
    deleteUrl() {
        this.url = "";
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
        return this.top.toUpperCase();
    },
    getBottomText() {
        return this.bottom.toUpperCase();
    }
})

// Steps to generate a post
export function postMeme() {
        // #1 -> Delete the last url
        image.value.deleteUrl();
        console.log(image.value.getImageName())
        // #2 -> Add the new data to the Form
        const meme = new FormData();
        meme.append("topText", text.value.getTopText());
        meme.append("bottomText", text.value.getBottomText());
        meme.append("imgUrl", "https://storage.googleapis.com/memebuild/default/" + image.value.getImageName() + ".jpg");
        // #3 -> Post the data to the MemeBuild Server
        axios.post(`https://memebuild.com/api/1.0/generateMeme?api-key=${API_KEY}`, meme)
        .then((response) => {
                console.log(response);
                // #4 Set the Image Url with the new one
                image.value.setImageUrl(response.data.url)
                console.log(image.value.getImageUrl())
        })
        .catch(function (error) {
                console.log(error);
        })
}

