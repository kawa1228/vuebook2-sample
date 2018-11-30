<template>
  <div class="kawauso-comp">
    <p>
      <button @click="show = !show">切り替え</button>
    </p>
    <transition name="kawauso">
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

<style lang="sass" scoped>
.kawauso-enter-active, .kawauso-leave-active
  transition: opacity 1s, transform 1s
.kawauso-enter
  opacity: 0
  transform: translateX(-20px)
.kawauso-leave-to
  opacity: 0
  transform: translateY(20px)
</style>