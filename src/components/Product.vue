<template>
  <div class="product" v-if="item" key="product">
    <p>このページはID.{{ id }}の詳細です。</p>
    <h1>商品情報</h1>
    <dl class="product-tabele">
      <dt>商品</dt>
      <dd>{{ item.name }}</dd>
      <dt>価格</dt>
      <dd>{{ item.price }}円</dd>
      <dt>産地</dt>
      <dd>{{ item.content }}</dd>
    </dl>
  </div>
  <div v-else key="loading">読み込み中...</div>
</template>

<script>
import products from "../api/products.js";
export default {
  props: {
    id: Number
  },
  data() {
    return {
      item: null
    };
  },
  watch: {
    id: {
      handler() {
        products.asyncFind(this.id, item => {
          this.item = item;
        });
      },
      immediate: true
    }
  }
};
</script>

<style lang="sass" scoped>
dt
  float: left 
  clear: left 
  margin-right: 0.5em 
  width: 120px 
dd
  float: left 
  margin-left: 1em 
</style>
