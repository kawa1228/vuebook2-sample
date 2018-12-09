<template>
  <div class="chap8">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="{ id, name } in list" :key="id">
        <router-link :to="`/chap8/${ id }`">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import products from "../api/products.js";
export default {
  name: "Chap8",
  computed: {
    list: () => products.fetch()
  }
};
</script>
