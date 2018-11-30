const windowPlugin = {
  install: function(Vue) {
    const store = new Vue({
      data: {
        scrollY: 0
      }
    });
    const timer = null;
    window.addEventListener("scroll", function() {
      if (timer === null) {
        timer = setTimeout(() => {
          store.scrollY = window.scrollY;
          this.clearTimeout(timer);
          timer = null;
        }, 200);
      }
    });
    Vue.use(windowPlugin);
  }
};
