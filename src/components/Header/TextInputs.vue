<script setup>
import { text } from "../../stores/image"
</script>

<template>
    <input
    type = "text"
    class = "text-input"
    v-model = "text.top"><br><br>
                
    <input 
    type = "text"
    class = "text-input" 
    v-model = "text.bottom"><br><br>
</template>
<style lang="scss" scoped>
.text-input {
    padding: 3px 9px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 450;
    margin: 0 8px;
}
</style>
