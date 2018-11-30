<template>
  <div class="chap6">
    <h1>This is Chap6 page</h1>
    <kawauso-comp/>
    <btn-transition/>
  </div>
</template>

<script>
import kawausoComponent from "../components/KawausoComp.vue";
import btnTransition from "../components/BtnTransition.vue";

export default {
  components: {
    "kawauso-comp": kawausoComponent,
    "btn-transition": btnTransition
  },
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="sass">
</style>
