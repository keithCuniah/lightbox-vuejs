<template>
  <div @click.stop>
    <div class="lightbox__loading" v-if="loading"></div>
    <transition name="lightbox-fade">
      <img
        :src="src"
        :alt="src"
        class="lightbox__image"
        :style="style"
        :key="src"
      />
    </transition>
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
  methods: {
    resizeImage(image) {
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
        left: (window.innerWidth - width) * 0.5 + "px",
      };
    },
  },
  mounted() {
    let image = new window.Image();

    image.onload = () => {
      this.loading = false;
      this.src = this.image;
      this.resizeImage(image);
    };
    image.src = this.image;
    this.resizeEvent = () => {
      console.log("resize");
      this.resizeImage(image);
    };
    window.addEventListener("resize", this.resizeEvent);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEvent);
  },
};
</script>

<style lang="scss" scoped></style>
