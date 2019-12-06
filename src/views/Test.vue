<template>
  <div class="test">
    <PageHeader sitename="test page" />
    <h1>Test</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/Header.vue';

export default {
  name: 'Test',
  components: {
    PageHeader,
  },
};
</script>
