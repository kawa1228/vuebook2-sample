<template>
  <div class="product">
    <p>このページはID.{{ id }}の詳細です。</p>
    <h1>商品情報</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  }
};
</script>
