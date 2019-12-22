<template>
  <div class="home">
    <p>{{ text }}</p>
    <!-- <p>{{ timenum }}</p> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      text: 'WELCOME',
      timenum: 2,
      timer: null,
    };
  },
  mounted() {
    this.setTime();
  },
  destroyed() {
    this.closeTime();
  },
  methods: {
    setTime() {
      this.timer = setInterval(() => {
        this.timenum -= 1;
        if (this.timenum === 0) {
          this.$router.push('example');
        }
      }, 1000);
    },
    closeTime() {
      clearInterval(this.timer);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.home{
  width: 100vw;
  height: 100vh;
  background: map-get($color,main);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: opacity 3s;
}
p{
  color: map-get($color,light);
  font-size: 64px;
  line-height: 1.5;
  animation: opacity 3s;
}
@keyframes opacity {
  from {
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}

</style>
