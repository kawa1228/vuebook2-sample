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
.ranking-item:nth-of-type(1)
  border-top: none
.ranking-item
  position: relative
  width: 40%
  padding: 10px 0
  border-top: 1px solid #b0c4de
.order
  display: inline-block
  width: 18px
  height: 18px
  // margin: 0 10px
  border: 1px solid #ccc
  color: #3cb371
  vertical-align: center
  line-height: 16px
  // ひし形
  // transform: rotate(45deg)
  border-radius: 50%
  position: absolute
  top: 45px
  left: 120px
  // height: 20px

  // :nth-of-type(n) 要素ごとに数えたn番目を指定
.ranking-item:nth-of-type(odd) .order
  border-color: #d3d3d3
  color: #fff
  background-color: #3cb371
.ranking-item:nth-of-type(even) .order
  border-color: #d3d3d3
  background-color: #fffacd
</style>
