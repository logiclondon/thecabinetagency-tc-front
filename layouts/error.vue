<template>
  <div>
    <div class="page-overlay" :class="{'to-reveal' : removeOverlay}"></div>
    <header>
      <div class="container">
        <h1>Page Not Found</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: ['error'],

  data () {
    return {
      removeOverlay: false,
      isTouch: false,
    }
  },

  head () {
    return {
      // title: "",
      title: 'Oops',
      bodyAttrs: {
        class: this.isTouch ? 'mobile error' : 'desk error',
      }
    }
  },

  beforeMount() {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.isTouch = true;
    }
  },

  mounted() {
    setTimeout(() => {
      this.removeOverlay = true;
    }, 100);
  },

}
</script>

<style lang="scss">
  //@import '../assets/styles/main.scss';
  //@import '../assets/styles/sections/error.scss';
</style>
