import Vue from "vue";
import store from "./LightboxStore";

Vue.directive("lightbox", {
  bind(el) {
    console.log("binding");
    let index = store.addImage(el.getAttribute("href"));
    el.addEventListener("click", function (e) {
      e.preventDefault();
      store.open(index);
    });
  },
  unbind(el) {
    console.log("unbinding");
    store.remove(el.getAttribute("href"));
  },
});
