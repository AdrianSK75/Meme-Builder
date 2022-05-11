<script setup>
import { text } from "../../stores/image"
</script>

<template>
    <input
    type = "text" 
    v-model = "text.top"><br>
                
    <input 
    type = "text" 
    v-model = "text.bottom"><br>
</template>
