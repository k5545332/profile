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
      timenum: 2.5,
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
        this.timenum -= 0.5;
        if (this.timenum === 0) {
          this.$router.push('example');
        }
      }, 500);
    },
    closeTime() {
      clearInterval(this.timer);
    },
  },
};
</script>
<style lang="scss" scoped>

.home{
  position: relative;
  width: 100vw;
  height: 100vh;
  animation: bgcolor 3s forwards;
}
p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 64px;
  line-height: 1.5;
  animation: color 2.5s forwards;
}

@keyframes bgcolor {
  0% {
    background: map-get($color,main);
  }
  25% {
    background: map-get($color,main);
  }
  100%{
    background: map-get($color,light);
  }
}
@keyframes color {
  0% {
    color: map-get($color,light);
    }
  100%{
    color: map-get($color,main);
  }
}

</style>
