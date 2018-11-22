<template>
  <div class="comp-child">
    My Component Child
    <p>{{ val }}</p>
  </div>
</template>

<script>
export default {
  props: ["val"]
};
</script>
