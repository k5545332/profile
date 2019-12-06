<template>
  <div class="about">
    <PageHeader sitename="about page" />
    <h1>This is an about page</h1>
    <button @click="attack">
      Attack
    </button>
    <p>day : {{ day }}</p>
    <p>player : {{ user.name }}</p>
    <p>hp : {{ user.hp }}</p>
  </div>
</template>


<script>
import { mapMutations, mapState } from 'vuex';

import PageHeader from '@/components/Header.vue';


export default {
  computed: {
    ...mapState(['day', 'user', 'status']),
  },
  components: {
    PageHeader,
  },
  methods: {
    ...mapMutations(['dayPlus', 'attack', 'checkInfo']),
    afterDay() {
      this.$store.commit('dayPlus');
    },
    async attack() {
      await this.$store.commit('attack');

      await setTimeout(() => {
        this.$store.commit('checkInfo');
      }, 10);

      if (this.status === true) {
        this.afterDay();
      }
    },
  },
};
</script>
