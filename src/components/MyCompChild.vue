<template>
  <div class="comp-child">
    <ul>
      <li>
        {{ name }}　
        <button @click="handleClick"> on </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    val: String,
    name: String
  },
  methods: {
    handleClick: function() {
      this.$emit("childs-event");
    }
  }
};
</script>
