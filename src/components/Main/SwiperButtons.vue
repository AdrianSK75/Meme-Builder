<script setup>
import { defineEmits } from "vue"

const emit = defineEmits(['swipeGallery'])

const sendEvent = (status) => {
    emit('swipeGallery', status)
}

</script>

<template>
    
    <div class="buttons-grid">
        <button class = "button-image" @click = "sendEvent(false)"> Background Images </button>
        <button class = "button-image" @click = "sendEvent(true)"> Generated Images </button>
        <br>
    </div>
    
</template>

<style lang="scss" scoped>
.buttons-grid {
    display: block;
    text-align: center;
    background-color: #B8FFF9;  
}
.button-image {
    padding: 3px 9px;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 450;
    margin: 0 8px;
}
</style>