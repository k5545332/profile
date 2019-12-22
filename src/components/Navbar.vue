<template>
  <div
    id="nav"
    @click="closeNav"
  >
    <div class="content">
      <router-link to="/about">
        {{ pagename1 }}
      </router-link> |
      <router-link :to="{name:'example'}">
        {{ pagename2 }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  data() {
    return {
      pagename1: 'About',
      pagename2: 'Example',
    };
  },
  methods: {
    ...mapMutations(['closeMaskHandler']),
    closeNav() {
      this.$store.commit('closeMaskHandler');
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
#nav{
  font-size: 0;
  @include media_query(md){
      position: absolute;
      top: $header_height_md;
      left: -100%;
      width: 100%;
      height: calc(100vh - #{$header_height_md});
      background: rgba(0,0,0,.8);
      .content{
          position: fixed;
          left: 0;
          width: 300px;
          height: 100%;
          background: map-get($color,sub);
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: auto;
          padding: times(2);
          transform: translateX(-100%);
      }
  }
  a{
      color: map-get($color,light);
      display: inline-block;
      font-size: 1rem;
      position: relative;
      padding: 0 times(2);
      text-align: center;
      line-height: 1.5;
      @include media_query(md){
          width: 100%;
          padding: times(1);
          display: block;
      }
  }
  .a_active{
      background: map-get($color,sub);
      @include media_query(md){
          background: map-get($color,light);
          color: map-get($color,sub);
      }
  }
  .router-link-active{
    color: map-get($color,sub);
    background: map-get($color,light);
  }
}
</style>
