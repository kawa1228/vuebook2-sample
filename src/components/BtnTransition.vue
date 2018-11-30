<template>
  <div class="btn-transition">
    <p>
      <button @click="show=!show">へんなスタイル</button>
    </p>
    <transition name="strange">
      <div v-if="show" key="a">TRUE</div>
      <div v-else key="b">FALSE</div>
    </transition>
    <p>
      <button @click="show2=!show2">ただしいスタイル</button>
    </p>
    <transition name="correct">
      <div v-if="show2" key="c">TRUE</div>
      <div v-else key="d">FALSE</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show2: true
    };
  }
};
</script>

<style lang="sass">
// へんなスタイル
.strange-enter-active, .strange-leave-active
  transition: opacity 1s
.strange-enter, .strange-leave-to
  opacity: 0
// ただしいスタイル
.correct-enter-active, .correct-leave-active
  transition: opacity 1s
.correct-leave-active
  position: absolute
.correct-enter, .correct-leave-to
  opacity: 0
</style>