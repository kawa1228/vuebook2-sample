<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/chap5">Chap5</router-link>|
      <router-link to="/chap6">Chap6</router-link>|
      <router-link to="/chap7">Chap7</router-link>|
      <router-link to="/chap8">Chap8</router-link>|
      <router-link to="/chap9">Chap9</router-link>|
      <router-link to="/chap10">Chap10</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
