<template>
  <div class="my-component">
    <p>
    My Component
    <comp-child
      v-for="(item, index) in list"
      :key="item.id"
      :name="item.name"
      @childs-event="parentsMethod(index)"
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
  },
  methods: {
    parentsMethod: function(index) {
      console.log(`${index}番目をcatch!`);
    }
  }
};
</script>