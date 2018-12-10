<template>
  <div class="chap9">
    <ul class="ranking">
      <li class="ranking-item" v-for="item in list" :key="item.id">
        <img src="https://placehold.jp/50x50.png" alt class="img">
        <span class="order"></span>
        <p class="text">{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, text: "テキスト1" },
        { id: 2, text: "テキスト2" },
        { id: 3, text: "テキスト3" },
        { id: 4, text: "テキスト4" }
      ]
    };
  }
};
</script>


<style lang="sass" scoped>
ul
  list-style: none
.text
  display: inline-block
  vertical-align: top
  margin-left: 10px
.order
  display: inline-block
  width: 18px
  height: 18px
  margin: 0 10px
  border: 1px solid #ccc
  color: #aaa
  vertical-align: center
  line-height: 16px
</style>
