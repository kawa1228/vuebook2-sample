<template>
  <div class="my-component">
    <p>
    My Component
    <comp-child val="this is child A"/>
    <comp-child val="this is child B"/>
    </p>
  </div>
</template>

<script>
import CompChild from "./MyCompChild";
export default {
  components: {
    "comp-child": CompChild
  }
};
</script>