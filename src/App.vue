<template>
  <div id="app">
    <div>
      <a v-lightbox v-for="n in 9" :key="n" :href="`https://robohash.org/${n}`">
        <img :src="`https://robohash.org/${n}?size=200x200`" />
      </a>
      <a
        v-lightbox.daboudi="'robotABC'"
        v-for="n in 'abcdefg'"
        :key="n"
        :href="`https://robohash.org/${n}`"
      >
        <img :src="`https://robohash.org/${n}?size=200x200`" />
      </a>
    </div>
    <button @click="title = 'robot123'">Robot 123</button>
    <button @click="title = 'robotABC'">Robot ABC</button>
    <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from "./components/lightbox/Lightbox.vue";

export default {
  name: "App",
  components: { Lightbox },
  data() {
    return { title: "robot123" };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
