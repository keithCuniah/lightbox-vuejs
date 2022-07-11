<template>
  <div id="app">
    <a
      v-lightbox
      v-for="n in 9"
      :key="n"
      :href="`https://robohash.org/${n - 1}`"
    >
      <img :src="`https://robohash.org/${n}?size=200x200`" />
    </a>
    <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from "./components/lightbox/Lightbox.vue";

export default {
  name: "App",
  components: { Lightbox },
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
