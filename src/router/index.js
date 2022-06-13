import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/LandingPage.vue"
import Gallery from "../views/MemeGallery.vue"

const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/gallery-generator",
        name: "Gallery",
        component: Gallery
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router