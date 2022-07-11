import Vue from "vue";
import store from "./LightboxStore";

Vue.directive("lightbox", {
  bind(el) {
    let index = store.addImage(el.getAttribute("href"));
    console.log(index);
    el.addEventListener("click", function (e) {
      e.preventDefault();
      store.open(index);
    });
  },
});
