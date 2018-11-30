<template>
  <div class="example">{{ scrollY }}</div>
</template>

<script>
export default {
  computed: {
    scrollY: function() {
      return this.$window.scrollY;
    }
  }
};
</script>