<script setup>
import { defineEmits } from "vue"

const emit = defineEmits(['swipeGallery'])

const sendEvent = (status) => {
    emit('swipeGallery', status)
}

</script>

<template>
    <hr>
    <br>
    <div class="buttons-grid">
        <button @click = "sendEvent(false)"> Background Images </button>
        <button @click = "sendEvent(true)"> Generated Images </button>
    </div>
</template>

<style lang="scss" scoped>
.buttons-grid {
    text-align: center;
    display: block;
}
</style>