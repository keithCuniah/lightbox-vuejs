<template>
  <div class="">
    <div v-if="loading">Chargement ...</div>
    <img v-else :src="src" :alt="src" class="lightbox__image" :style="style" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return { loading: true, src: false, style: {} };
  },
  mounted() {
    let image = new window.Image();
    image.onload = () => {
      this.loading = false;
      this.src = this.image;

      let { width, height } = image;
      if (width > window.innerWidth || height > window.innerHeight) {
        const ratio = width / height;
        const windowRatio = window.innerWidth / window.innerHeight;
        if (ratio > windowRatio) {
          width = window.innerWidth;
          height = width / ratio;
        } else {
          height = window.innerHeight;
          width = height * ratio;
        }
      }
      this.style = {
        width: width + "px",
        height: height + "px",
        top: (window.innerHeight - height) * 0.5 + "px",
      };
    };
    image.src = this.image;
  },
};
</script>

<style lang="scss" scoped></style>
