<template>
  <div class="chap7">
    <h1>This is Chap7 page</h1>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$store.state.count);
    // this.$store.commit("increment");
    // console.log(this.$store.state.count);
    console.log(this.$store.getters.max);
    console.log(this.$store.getters.item(2));
    console.log(this.$store.getters.name(2));
  }
};
</script>
