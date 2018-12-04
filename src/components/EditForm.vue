<template>
  <div class="edit-form">
    <!-- ** コメントアウトした部分が共通 **
    <h3>バインドとイベントを使った場合</h3>
    <input type="text" :value="message" @input="doUpdate">-->
    <h3>v-model を使った場合</h3>
    <input v-model="message2">
  </div>
</template>

<script>
export default {
  name: "EditForm",
  computed: {
    // message() {
    //   return this.$store.getters.message;
    // },
    // 1つの算出プロパティにまとめるとスッキリする
    message2: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("doUpdate", value);
      }
    }
  }
  // methods: {
  //   doUpdate(event) {
  //     this.$store.dispatch("doUpdate", event.target.value);
  //   }
  // }
};
</script>
