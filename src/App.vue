<template>
  <div
    id="app"
    :class="{mask:showmask}"
  >
    <router-view />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      newscreenwidth: null,
    };
  },
  computed: {
    ...mapState(['showmask', 'screenwidth']),
  },
  mounted() {
    const vm = this;
    window.addEventListener('resize', () => {
      vm.newscreenwidth = document.body.clientWidth;
      if (vm.newscreenwidth !== vm.screenwidth) {
        vm.closeNav();
      }
    });
  },
  methods: {
    ...mapMutations(['closeMaskHandler']),
    closeNav() {
      this.$store.commit('closeMaskHandler');
    },
  },
};
</script>

<style lang="scss">
body {
    overflow-x: auto;
    min-width: 320px;
    font-family: 'Roboto', sans-serif;
    @include media_query(md){
        padding-top: $header_height_md;
    }
}
.container{
    max-width: $container_width;
    width: 100%;
    margin:auto;
    padding: 0 times(2);
}
.grid_container{
    padding: 0;
    @extend %clearfix;
}
.clearfix{
    @extend %clearfix;
}
.mask {
    position: relative;
    overflow: hidden;
    header{
      #nav {
        left: 0;
          .content{
            transform: translateX(0%);
            transition: transform .3s;
          }
      }
      .line {
          height: 0;
          &::before {
              top: -3px;
              transform: rotate(360deg * 2 - 45deg);
          }
          &::after {
              top:-6px ;
              transform: rotate(360deg * 2 + 45deg);
          }
      }
    }
}
</style>
