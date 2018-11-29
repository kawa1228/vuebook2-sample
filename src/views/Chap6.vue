<template>
  <div class="chap6">
    <transition>
      <h1 v-show="show">This is Chap6 page</h1>
    </transition>
    <p>
      <button @click="show = !show">切り替え</button>
    </p>
    <kawauso-comp/>
  </div>
</template>

<script>
import kawausoComponent from "../components/KawausoComp.vue";

export default {
  components: {
    "kawauso-comp": kawausoComponent
  },
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="sass">
.v-enter-active, .v-leave-active
  transition: opacity 1s
.v-enter, .v-leave-to
  opacity: 0
</style>
