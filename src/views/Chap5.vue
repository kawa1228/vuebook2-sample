<template>
  <div class="chap5">
    <h1>This is Chap5 page</h1>
    <my-component/>
  </div>
</template>

<script>
import myComponent from "../components/MyComponent.vue";
export default {
  components: {
    "my-component": myComponent
  }
};
</script>
