<template>
  <div class="my-component">
    <p>
    My Component
    <comp-child
      v-for="item in list"
      :key="item.id"
      :name="item.name"
    />
    </p>
  </div>
</template>

<script>
import CompChild from "./MyCompChild";
export default {
  components: {
    "comp-child": CompChild
  },
  data() {
    return {
      list: [
        { id: 1, name: "apple" },
        { id: 2, name: "grape" },
        { id: 3, name: "orange" }
      ]
    };
  }
};
</script>