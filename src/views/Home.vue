<template>
  <div class="home">
    <PageHeader sitename="home page">
      <p slot="header">
        home slot
      </p>
    </PageHeader>
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import PageHeader from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    PageHeader,
  },
};
</script>
