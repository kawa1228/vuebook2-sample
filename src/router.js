import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chap5",
      name: "chap5",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Chap5.vue")
    },
    {
      path: "/chap6",
      name: "chap6",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Chap6.vue")
    },
    {
      path: "/chap7",
      name: "chap7",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Chap7.vue")
    },
    {
      path: "/chap8",
      component: () => import("./views/Chap8.vue")
    },
    {
      path: "/chap8/:id(\\d+)",
      component: () => import("./components/Product.vue"),
      // パラメーターをpropsとしてわたす
      props: route => ({ id: Number(route.params.id) })
    },
    {
      path: "/chap9",
      name: "chap9",
      component: () => import("./views/Chap9.vue")
    },
    {
      path: "/chap10",
      name: "chap10",
      component: () => import("./views/Chap10.vue")
    }
  ]
});
