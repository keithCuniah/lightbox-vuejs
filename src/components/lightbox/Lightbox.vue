<template>
  <div class="lightbox" v-if="image">
    <lightbox-image :image="image"></lightbox-image>
  </div>
</template>
<script>
import "./LightboxDirective";
import store from "./LightboxStore";
import LightboxImage from "./LightboxImage.vue";

export default {
  components: {
    LightboxImage,
  },
  data() {
    return { state: store.state };
  },
  computed: {
    url() {
      return this.state.image;
    },
    image() {
      return this.state.images[this.state.index];
    },
  },
};
</script>

<style src="./lightbox.scss" lang="scss"></style>
