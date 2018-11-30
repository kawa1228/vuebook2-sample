<template>
  <div class="btn-transition">
    <p>
      <button @click="show = !show">切り替え</button>
    </p>
    <transition name="strange">
      <div v-if="show" key="a">TRUE</div>
      <div v-else key="b">FALSE</div>
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
.strange-enter-active, .strange-leave-active
  transition: opacity 1s
.strange-enter, .strange-leave-to
  opacity: 0
</style>