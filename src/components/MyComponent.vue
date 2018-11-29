<template>
  <div class="my-component">
    <p>
    My Component
    <comp-child
      v-for="item in list"
      :key="item.id"
      :name="item.name"
      v-bind="item"
      @childs-event="parentsMethod"
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
        { id: 1, name: "apple", count: 10 },
        { id: 2, name: "grape", count: 15 },
        { id: 3, name: "orange", count: 20 }
      ]
    };
  },
  methods: {
    parentsMethod: function(id) {
      console.log(`${id}番目をcatch!`);
    }
  }
};
</script>