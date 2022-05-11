<template>
    <div class = "top-grid">
                <AppTitle />
                <TextInputs />
                <DecissionButtons />
                <ChoosedImage />   
    </div>
</template>

<script setup>
import AppTitle from "../Header/AppTitle.vue"
import TextInputs from "../Header/TextInputs.vue"
import DecissionButtons from "../Header/DecissionButtons.vue"
import ChoosedImage from "../Header/ChoosedImage.vue"
</script>

<style lang="scss" scoped>
.top-grid {
    text-align: center;
}
</style>