<template>
  <img class = "photo" />
</template>

<style lang="scss" scoped>
.photo {
    width: 40%;
    padding-top: 80%;
    animation: pulse-bg 1s infinite;
}
@keyframes pulse-bg {
  0% {
    background-color: rgb(218, 218, 218);
  }
  50% {
    background-color: rgb(194, 193, 193);
  }
  100% {
    background-color: rgb(218, 218, 218);
  }
}
</style>
