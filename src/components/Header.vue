<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <h1>
            Profile
          </h1>
        </router-link>
      </div>
      <Navbar />
      <div
        class="burger"
        @click="toggleNav"
      >
        <div
          class="line"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'PageHeader',
  components: {
    Navbar,
  },
  methods: {
    ...mapMutations(['showMaskHandler']),
    toggleNav() {
      this.$store.commit('showMaskHandler');
    },
  },
};

</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
header{
  height: $header_height;
  background: map-get($color,main);
  z-index: 10;
  @include media_query(md){
      min-width: 320px;
      height: $header_height_md;
      position: fixed;
      top: 0;
      width: 100%;
  }
  >.container{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include media_query(md){
          justify-content: center;
      }
  }
  .logo{
      >a{
          h1{
              color: map-get($color,light);
              white-space: nowrap;
          }
      }
  }
  .burger{
      width: $limit_width;
      height: $limit_width;
      margin-left: auto;
      position: absolute;
      left: times(2);
      display: none;
      cursor: pointer;
      @include media_query(md){
          display: block;
      }
  }
  .line{
      @extend %all_zero_absolute_center;
      width: 100%;
      height: $limit_line_height;
      background: map-get($color,sub);
      &::before{
          @extend %burger_line;
          top: -11px;
      }
      &::after{
          @extend %burger_line;
          top: 8px;
      }
  }
}
</style>
