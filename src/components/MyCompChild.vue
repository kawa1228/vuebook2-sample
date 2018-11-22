<template>
  <div class="comp-child">
    <ul>
      <li>{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    val: String,
    name: String
  }
};
</script>
