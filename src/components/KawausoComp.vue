<template>
  <div>
    <p>
      <button @click="show = !show">切り替え</button>
    </p>
    <transition>
      <img v-show="show" src="../../public/img/icons/kawauso.png" height="60px">
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="sass">
.v-enter-active, .v-leave-active
  transition: opacity 1s, transform 1s
.v-enter
  opacity: 0
  transform: translateY(-20px)
.v-leave-to
  opacity: 0
  transform: translateY(20px)
</style>