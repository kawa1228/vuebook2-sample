<template>
  <div class="chap7">
    <p>『{{ message }}』</p>
    <edit-form/>
  </div>
</template>

<script>
import editForm from "../components/EditForm.vue";

export default {
  name: "Chap7",
  components: {
    "edit-form": editForm
  },
  computed: {
    message() {
      return this.$store.getters.message;
    }
  }
};
</script>
