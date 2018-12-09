<template>
  <div class="chap9">
    <a href="https://github.com/typicode/json-server">json-server</a>
    <p>yarn global add json-server</p>
    <p>> json-server db.json</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios.get("http://localhost:3000/comments").then(res => {
      console.log(res.data);
    });
  }
};
</script>
