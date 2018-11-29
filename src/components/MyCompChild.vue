<template>
  <div class="comp-child">
    <ul>
      <li>
        {{ name }}　
        {{ count }}個　
        <button @click="handleClick"> on </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    val: String,
    name: String,
    count: Number,
    id: Number
  },
  methods: {
    handleClick: function() {
      this.$emit("childs-event", this.id);
    }
  }
};
</script>
