<template>
  <header>
    <h1>This is header -- {{ sitename }}</h1>
    <slot name="header">
      default slot
    </slot>
    <Navbar />
  </header>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'PageHeader',
  components: {
    Navbar,
  },
  props: {
    sitename: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
    h1{
        width: 100%;
        height: 80px;
        background: #41B983;
        color: #fff;
        line-height: 80px;
        font-size: 48px;
        font-weight: bolder;
    }
</style>
