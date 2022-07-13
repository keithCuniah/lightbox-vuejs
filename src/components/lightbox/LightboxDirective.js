import Vue from "vue";
import store from "./LightboxStore";

Vue.directive("lightbox", {
  bind(el, binding) {
    let group = binding.value === undefined ? "default" : "robotABC";
    console.log(group);
    store.addImage(el.getAttribute("href"), group);
    el.addEventListener("click", function (e) {
      e.preventDefault();
      store.open(el.getAttribute("href"), group);
    });
  },
  unbind(el, binding) {
    console.log("unbinding");
    let group = binding.value === undefined ? "default" : "robotABC";
    store.remove(el.getAttribute("href"), group);
  },
});
