<script setup>
import { defineProps, ref } from 'vue'
import iconsData from "./icons.json"
const props = defineProps({
  show: Boolean
})
const icons = ref(iconsData)
</script>

<template>
  <Transition>
    <div v-if="props.show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <div v-for = "icon in icons" :key = "icon.id" class = "modal-body">
                <img 
                class = "logo" 
                :src = "icon.file" 
                />
            </div>
            <button
            class="modal-default-button"
            @click="$emit('close')">OK</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  margin: 0px;
}

.logo {
    display: block;
    margin: 0 auto;
    max-width: 25%;
    max-height: 10%;
    margin-bottom: 16px;
    cursor: pointer;
}

.modal-default-button {
  float: right;
}
</style>